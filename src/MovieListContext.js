import moviesList from './data.json';
import { createContext, useContext } from "react";
import React, { Component, useState, useEffect } from 'react';

// Creating the context object and passing the default values.
const MoviesListContext = createContext();



export default MoviesListContext