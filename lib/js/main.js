import fluture from 'fluture';
import sanctuary from 'sanctuary';
import ramdaLens from 'ramda-lens';
import sanctuaryDef from 'sanctuary-def';
import ramdaFantasy from 'ramda-fantasy';
import seamlessImmutable from 'seamless-immutable';

window.$ = sanctuaryDef
window.L = ramdaLens
window.S = sanctuary;
window.I = seamlessImmutable;
window.Future = fluture;
window.Either = ramdaFantasy.Either;
window.Identity = ramdaFantasy.Identity;
window.IO = ramdaFantasy.IO;
window.lift2 = ramdaFantasy.lift2;
window.lift3 = ramdaFantasy.lift3;
window.Maybe = ramdaFantasy.Maybe;
window.Tuple = ramdaFantasy.Tuple;
window.Reader = ramdaFantasy.Reader;

const _window = {}
R.forEach(x => _window[x] = window[x], R.keys(R).filter(k => k in window))
R.forEach(x => window[x] = R[x], R.keys(R))
