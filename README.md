# Laravel + React 

Back-end 
- [x] Laravel 10 + PHP 8

Front-end 
- [x] React 18 + TypeScript + Vite
- [x] React Router v6
- [x] Tailwind CSS / SASS

### Set Up

Install dependencies 
```
composer install && npm install
``` 

Run Laravel and React dev server concurrently
```
npm run dev
``` 

Preview production build 
```
npm run production
``` 

### Routes

##### `routes/web.php` 

```php
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*');
```

Home: http://localhost:8000

Login: http://localhost:8000/login

404: http://localhost:8000/i-dont-exist

##### `routes/api_v1.php` 

```php
// Authenticated API (sanctum)
Route::group([
    'middleware' => ['api_authenticated']
], function() {
    Route::get('/example-authenticated', [ExampleController::class, 'authenticated']);
});

// Public API
Route::group([
    'middleware' => ['api_public'],
], function () {
    Route::get('/example', [ExampleController::class, 'index']);
});

``` 

`API Example:` http://localhost:8000/api/v1/example 

`API Protected Example:` http://localhost:8000/api/v1/example-authenticated 

### Middleware Groups 

Middleware groups `web`, `api_public` and `api_authenticated` are defined in `app/Http/Kernel.php` 
