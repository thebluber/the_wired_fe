require('file?name=[name].[ext]!./index.html');
require('expose?$!expose?jQuery!jquery');
require('./css/custom.css');
require('bootstrap-css');
require('./js/custom.js');
require('./css/font-awesome-4.6.3/css/font-awesome.min.css');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tooltip from 'angular-ui-bootstrap/src/tooltip';

import test from './directives/test.js';

angular.module('theWiredFE', [tooltip]).
  directive('test', test);

