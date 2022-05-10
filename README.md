# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ceilidhem/lotide`

**Require it:**

`const _ = require('@ceilidhem/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head()`: - takes in an array and returns the head of the array
*  `tail()`: - takes in an array and returns the tail of the array
*  `middle()`: - takes in an array and returns the middle element(s) of the array. If the array length is odd, the middle element will be returned. If it is even, the middle two elements will be returned.
*  `countLetters()`: - takes in a string and returns how many of each letter is in the word.
*  `countOnly()`: - takes in two parameters, the first is an array and the second is an object which uses booleans to define what items are to be counted and which are to be excluded. The amount of times each 'true' item occurs will be returned. 
*  `eqArrays()`: - takes in two arrays and determines whether or not they are strictly equal.
*  `eqObjects()`: - takes in two objects and determines if the keys and values of each object are equal.
*  `findKeyByValue()`: - takes in an object and a value to look for. If the value in the object matches a key, that key will be returned.
*  `findKey()`: - takes in an object and a callback function. Depending on the callback function, the key that matches this callback function will be returned. 
*  `letterPositions()`: - takes in a string and returns the position of each letter. If the letter occurs more than once, all positions of each letter will be returned.
*  `takeUntil()`: - takes in an array and a callback function. The callback function defines where the array will stop, and returns the array up until (but not including) this stopping point.
*  `without()`: - takes in an item and an item to remove as parameters. The function will return a modified version of the item, excluding the item which was removed. 