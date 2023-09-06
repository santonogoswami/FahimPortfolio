<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\EffectController;
use App\Http\Controllers\backend\AboutController;
use App\Http\Controllers\backend\SkillController;
use App\Http\Controllers\backend\ExperienceController;
use App\Http\Controllers\backend\EducationController;
use App\Http\Controllers\backend\ServicesController;
use App\Http\Controllers\backend\WorkController;
use App\Http\Controllers\backend\TestimonialController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//effect Route__//
Route::get('backend/effect/index', [EffectController::class,'index'])->name('backend.effect.index');
Route::get('backend/effect/create', [EffectController::class,'create'])->name('backend.effect.create');
Route::post('backend/effect/store', [EffectController::class,'store'])->name('backend.effect.store');
Route::get('backend/effect/edit/{id}', [EffectController::class,'edit'])->name('backend.effect.edit');
Route::post('backend/effect/update/{id}', [EffectController::class,'update'])->name('backend.effect.update');
Route::get('backend/effect/delete/{id}', [EffectController::class,'destroy'])->name('backend.effect.delete');
//about Route__//
Route::get('backend/about/index', [AboutController::class,'index'])->name('backend.about.index');
Route::get('backend/about/create', [AboutController::class,'create'])->name('backend.about.create');
Route::post('backend/about/store', [AboutController::class,'store'])->name('backend.about.store');
Route::get('backend/about/edit/{id}', [AboutController::class,'edit'])->name('backend.about.edit');
Route::post('backend/about/update/{id}', [AboutController::class,'update'])->name('backend.about.update');
Route::get('backend/about/delete/{id}', [AboutController::class,'destroy'])->name('backend.about.delete');
//Skill Route__//
Route::get('backend/Skill/index', [SkillController::class,'index'])->name('backend.Skill.index');
Route::get('backend/Skill/create', [SkillController::class,'create'])->name('backend.Skill.create');
Route::post('backend/Skill/store', [SkillController::class,'store'])->name('backend.Skill.store');
Route::get('backend/Skill/edit/{id}', [SkillController::class,'edit'])->name('backend.Skill.edit');
Route::post('backend/Skill/update/{id}', [SkillController::class,'update'])->name('backend.Skill.update');
Route::get('backend/Skill/delete/{id}', [SkillController::class,'destroy'])->name('backend.Skill.delete');
//Experience Route__//
Route::get('backend/Experience/index', [ExperienceController::class,'index'])->name('backend.Experience.index');
Route::get('backend/Experience/create', [ExperienceController::class,'create'])->name('backend.Experience.create');
Route::post('backend/Experience/store', [ExperienceController::class,'store'])->name('backend.Experience.store');
Route::get('backend/Experience/edit/{id}', [ExperienceController::class,'edit'])->name('backend.Experience.edit');
Route::post('backend/Experience/update/{id}', [ExperienceController::class,'update'])->name('backend.Experience.update');
Route::get('backend/Experience/delete/{id}', [ExperienceController::class,'destroy'])->name('backend.Experience.delete');
//Education Route__//
Route::get('backend/Education/index', [EducationController::class,'index'])->name('backend.Education.index');
Route::get('backend/Education/create', [EducationController::class,'create'])->name('backend.Education.create');
Route::post('backend/Education/store', [EducationController::class,'store'])->name('backend.Education.store');
Route::get('backend/Education/edit/{id}', [EducationController::class,'edit'])->name('backend.Education.edit');
Route::post('backend/Education/update/{id}', [EducationController::class,'update'])->name('backend.Education.update');
Route::get('backend/Education/delete/{id}', [EducationController::class,'destroy'])->name('backend.Education.delete');
//Services Route__//
Route::get('backend/services/index', [ServicesController::class,'index'])->name('backend.services.index');
Route::get('backend/services/create', [ServicesController::class,'create'])->name('backend.services.create');
Route::post('backend/services/store', [ServicesController::class,'store'])->name('backend.services.store');
Route::get('backend/services/edit/{id}', [ServicesController::class,'edit'])->name('backend.services.edit');
Route::post('backend/services/update/{id}', [ServicesController::class,'update'])->name('backend.services.update');
Route::get('backend/services/delete/{id}', [ServicesController::class,'destroy'])->name('backend.services.delete');
//Work Route__//
Route::get('backend/work/index', [WorkController::class,'index'])->name('backend.work.index');
Route::get('backend/work/create', [WorkController::class,'create'])->name('backend.work.create');
Route::post('backend/work/store', [WorkController::class,'store'])->name('backend.work.store');
Route::get('backend/work/edit/{id}', [WorkController::class,'edit'])->name('backend.work.edit');
Route::post('backend/work/update/{id}', [WorkController::class,'update'])->name('backend.work.update');
Route::get('backend/work/delete/{id}', [WorkController::class,'destroy'])->name('backend.work.delete');
//Testimonial Route__//
Route::get('backend/Testimonial/index', [TestimonialController::class,'index'])->name('backend.Testimonial.index');
Route::get('backend/Testimonial/create', [TestimonialController::class,'create'])->name('backend.Testimonial.create');
Route::post('backend/Testimonial/store', [TestimonialController::class,'store'])->name('backend.Testimonial.store');
Route::get('backend/Testimonial/edit/{id}', [TestimonialController::class,'edit'])->name('backend.Testimonial.edit');
Route::post('backend/Testimonial/update/{id}', [TestimonialController::class,'update'])->name('backend.Testimonial.update');
Route::get('backend/Testimonial/delete/{id}', [TestimonialController::class,'destroy'])->name('backend.Testimonial.delete');






Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
