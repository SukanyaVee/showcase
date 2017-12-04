import React, {Component} from 'react';
import Sum from '../Topics/Sum';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'

class TopicBrowser extends Component
{
    render()
    {
    return (
    <div>
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
    </div>
            )
        }
}

export default TopicBrowser;