import 'oskari-bundle!oskari-frontend/bundles/framework/mapfull';

// jQuery-based UI components
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/divmanazer/bundle.js';

// Then import mapmodule and rest of the application
import 'oskari-bundle!oskari-frontend/bundles/mapping/mapmodule/map2d_ol';
import 'oskari-bundle!oskari-frontend/bundles/mapping/maparcgis';

import 'oskari-bundle!oskari-frontend/bundles/mapping/infobox';
import 'oskari-bundle!oskari-frontend/bundles/mapping/drawtools';
import 'oskari-bundle!oskari-frontend/bundles/mapping/toolbar';
import 'oskari-bundle!oskari-frontend/bundles/framework/publishedstatehandler';

import 'oskari-bundle!oskari-frontend/bundles/framework/coordinatetool';

import 'oskari-bundle!oskari-frontend/bundles/framework/rpc';
import 'oskari-bundle!oskari-frontend/bundles/framework/layeranalytics';

import 'oskari-lazy-bundle?timeseries!oskari-frontend/bundles/framework/timeseries';
import 'oskari-lazy-bundle?maplegend!oskari-frontend/bundles/framework/maplegend';
import 'oskari-lazy-bundle?featuredata!oskari-frontend/bundles/framework/featuredata';
import 'oskari-lazy-bundle?metadataflyout!oskari-frontend/bundles/catalogue/metadataflyout'

import './css/overwritten.css';
