/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SnippetRequest, PostJsonRequest } from './types';
import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function parseRequestBody(filename) {
	if (filename.match(/\.yml$/)) {
		return yaml.load(readFileSync(path.resolve(__dirname, filename)).toString());
	}

	return JSON.parse(readFileSync(path.resolve(__dirname, filename)).toString()) as any;
}

export const REQUESTS: SnippetRequest[] = [
{
	regionTag: 'maps_http_geolocation_celltowers',
	request: new PostJsonRequest({
		url: 'https://www.googleapis.com/geolocation/v1/geolocate',
		json: parseRequestBody(
			'../../specification/paths/geolocate/v1/examples/maps_http_geolocation_celltowers.yml'
		),
	}),
},
	{
		regionTag: 'maps_http_geolocation_wifi',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: parseRequestBody('../../specification/paths/geolocate/v1/examples/maps_http_geolocation_wifi.yml'),
		}),
	},
	{
		regionTag: 'maps_http_geolocation_ip',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: parseRequestBody('../../specification/paths/geolocate/v1/examples/maps_http_geolocation_ip.yml'),
		}),
	},
];