import  express  from  'express';

// controller logic to display your home page
export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Home' , page: 'home' });
}

// controller logic to display your About page
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'About Us' , page: 'about' });
}


// controller logic to display your Services page
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: ' Our Services' , page: 'services' });
}

// controller logic to display your Projects page
export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Our Projects' , page: 'projects' });
}

// controller logic to display your Contact page
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Contact us' , page: 'contact' });
}
