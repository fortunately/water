import React, {Component} from 'react';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import Header from '../components/Header/Header'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Footer from '../components/Footer/Footer'
import SearchResults from '../components/SearchResults/SearchResults'
import SearchFilter from '../components/SearchFilter/SearchFilter'
import OffersFilter from '../components/OffersFilter/OffersFilter';

import * as SearchActions from '../actions/SearchActions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class PageSearch extends Component {

    strToFilter(str){
        let curFilter = this.props.searchFilter;
        let newFilter = {};

        newFilter = Object.assign({}, curFilter, newFilter)

        for (let key in curFilter.ranges){

            let min = str.match(new RegExp(key + "_min=(\\d+)"))
            let max = str.match(new RegExp(key + "_max=(\\d+)"))

            if (min && min[1] !== undefined) newFilter.ranges[key].value[0] = parseFloat(min[1])
            if (max && max[1] !== undefined) newFilter.ranges[key].value[1] = parseFloat(max[1])

        }

        return newFilter;

    }


    componentWillMount(){
        let historySearch = history.location.search;
        let historyState = history.location.state;
        let newFilter = {};

        if (historyState && historyState.filter){
            newFilter = historyState.filter
            console.log(1)

        } else if(historySearch){
            newFilter = historySearch
            this.strToFilter(newFilter)
            console.log(2)
        } else {
            newFilter = this.props.searchFilter;
            console.log(3)
        }
        console.log(`newFilter = ${newFilter}`)
        //console.log(`getFilter = ${getFilter}`)



        this.props.actions.fetchSearchResults(newFilter)
    }
    render() {

        return (

            <section className="section">

                <div className="container">
                    <Breadcrumbs />
                    <h1 className="section__title section__title_main">
                        Источники в Свердловской области
                    </h1>

                    <h4 className="search__results-count">
                        Найдены {this.props.searchResults.length} источника
                    </h4>


                    <div className="search__content">
                        <main className="search__content-main">

                            <div className="offers-toolbar">
                                <div className="offers-toolbar__filters">
                                    <OffersFilter value={this.props.offersFilter.value} selectOnChange={this.props.actions.offersFiltering} sortOnChange={this.props.actions.offersSorting} order={this.props.offersFilter.order}/>

                                </div>
                                <div className="offers-toolbar__switches">
                                    <div className="offers-toolbar__switch offers-toolbar__switch_list active">
                                        Списком
                                    </div>
                                    <div className="offers-toolbar__switch offers-toolbar__switch_map">
                                        На карте
                                    </div>
                                </div>

                            </div>


                            <SearchResults searchFilter={this.props.searchFilter} items={this.props.searchResults} offersFilter={this.props.offersFilter}/>

                        </main>
                        <aside className="search__content-aside">
                            <div className="search__content-aside-inner">
                                <SearchFilter filter={this.props.searchFilter} onChange={::this.props.actions.searchFiltering}/>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
  return {
    offersFilter: state.search.offersFilter,
    searchFilter: state.search.searchFilter,
    searchResults: state.search.searchResults
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...SearchActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSearch)
