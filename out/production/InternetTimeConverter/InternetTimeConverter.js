(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main: function (args) {
      var tmp$0;
      (tmp$0 = document.getElementById('test')) != null ? (tmp$0.innerHTML = 'Testing of kotlin plugin') : null;
    }
  });
  Kotlin.defineModule('InternetTimeConverter', _);
  _.main([]);
}(Kotlin));
