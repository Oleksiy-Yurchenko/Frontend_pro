import GalleryController from './controller/GalleryController';
import '../css/styles.css';
import $ from 'jquery';


$(() => {
    console.log('app started')

    new GalleryController()
});