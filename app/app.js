require('file?name=[name].[ext]!./index.html')
require('css!less!spectre.css')

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import test from './directives/test.js';

angular.module('theWiredFE', []).
  directive('test', test);

