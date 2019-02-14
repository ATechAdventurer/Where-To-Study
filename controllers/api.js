const { promisify } = require('util');
const request = require('request');
const cheerio = require('cheerio');
const graph = require('fbgraph');
const PlaceController = require('./place');

const axios = require('axios');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};

exports.createPlace = (req, res) => {
  if(!req.body.token){
    res.status(401).send({ error : "missing token"});
  }
  if(req.body.token != "5678"){
    res.status(401).send({error: "unauthorized token"});
  }
  if(req.body.token == "5678"){
    PlaceController.addnewPlaces(req, res, null, true);
  }
}