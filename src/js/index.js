require("@babel/polyfill");
import axios from "axios";
import Search from "./model/search";

const search = new Search("pasta");

search.doSearch().then(result => console.log(result));
