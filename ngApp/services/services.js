var sampleproj;
(function (sampleproj) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('sampleproj').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('sampleproj').service('myService', MyService);
    })(Services = sampleproj.Services || (sampleproj.Services = {}));
})(sampleproj || (sampleproj = {}));
