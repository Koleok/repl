import z from 'z';
import monoid from 'monoid';
import cliquer from 'cliquer';
import fluture from 'fluture';
import dateFns from 'date-fns';
import jsverify from 'jsverify';
import sanctuary from 'sanctuary';
import ramdaLens from 'ramda-lens';
import immutableExt from 'immutable-ext';
import sanctuaryDef from 'sanctuary-def';
import ramdaFantasy from 'ramda-fantasy';
import seamlessImmutable from 'seamless-immutable';

window.$ = sanctuaryDef;
window.L = ramdaLens;
window.S = sanctuary;
window.M = monoid;

window.D = dateFns;
window.I = seamlessImmutable;
window.Map = immutableExt.Map;
window.List = immutableExt.List;

window.V = jsverify;
window.match = z;

window.cliquer = cliquer;
window.Future = fluture;
window.Either = ramdaFantasy.Either;
window.Identity = ramdaFantasy.Identity;
window.IO = ramdaFantasy.IO;

window.lift2 = ramdaFantasy.lift2;
window.lift3 = ramdaFantasy.lift3;

window.Maybe = ramdaFantasy.Maybe;
window.Tuple = ramdaFantasy.Tuple;
window.Reader = ramdaFantasy.Reader;

// const _window = {}
// R.forEach(x => _window[x] = window[x], R.keys(R).filter(k => k in window))
// R.forEach(x => window[x] = R[x], R.keys(R))
