import express from 'express';
let router = express.Router();

// import the index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers';

/* GET default Route. */
router.get('/', (req, res, next) => { DisplayHomePage(req, res, next);   });

/* GET Home page. */
router.get('/home', (req, res, next) => { DisplayHomePage(req, res, next);   });


/* GET About page. */
router.get('/about', (req, res, next) => { DisplayAboutPage(req, res, next);   });


/* GET Services page. */
router.get('/services', (req, res, next) => { DisplayServicesPage(req, res, next);   });


/* GET Projects page. */
router.get('/projects', (req, res, next) => { DisplayProjectsPage(req, res, next);   });


/* GET Contact page. */
router.get('/contact', (req, res, next) => { DisplayContactPage(req, res, next);   });

export default router;

