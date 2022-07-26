describe('Test home page', () => {
  beforeEach(() => {
    cy.viewport(1350, 768);
    cy.visit('/');
  });

  describe('Test initial load', () => {
    it('The page should show the initial loading elements', () => {
      cy.get('[data-testid="header-selector"]').should('exist');
      cy.get('[data-testid="header-image"]').should('exist');

      cy.get('[data-testid="footer-text"]').should(
        'have.text',
        'Todos los derechos reservados © 2022'
      );
      cy.get('[data-testid="header-title"]').should('have.text', 'Reto');
      cy.get('[data-testid="button-movies"]').should('have.text', 'Peliculas');
      cy.get('[data-testid="button-tv"]').should('have.text', 'Shows de tv');
    });
  });

  describe('Test change language', () => {
    it('The page should change language when selecting a new language.', () => {
      cy.get('[data-testid="header-selector"]').select('en');

      cy.get('[data-testid="footer-text"]').should(
        'have.text',
        'All rights reserved © 2022'
      );
      cy.get('[data-testid="header-title"]').should('have.text', 'Challenge');
      cy.get('[data-testid="button-movies"]').should('have.text', 'Movies');
      cy.get('[data-testid="button-tv"]').should('have.text', 'Tv shows');
    });
  });

  describe('Test load movies', () => {
    it('The list of movies should be displayed when pressing the movies button.', () => {
      cy.get('[data-testid="list-movies"]').should('not.exist');
      cy.get('[data-testid="button-movies"]').click();
      cy.get('[data-testid="list-movies"]').should('exist');
      cy.get('[data-testid="list-movies"]')
        .children()
        .should('have.length', 20);

      cy.get('[data-testid="button-movies"]').should(
        'have.css',
        'background',
        'rgb(234, 179, 8) none repeat scroll 0% 0% / auto padding-box border-box'
      );

      cy.get('[data-testid="list-title"').should(
        'have.text',
        'Listado de peliculas populares'
      );
    });
  });

  describe('Test load tv shows', () => {
    it('The list of tv shows should be displayed when pressing the tv shows button.', () => {
      cy.get('[data-testid="list-tv"]').should('not.exist');
      cy.get('[data-testid="button-tv"]').click();
      cy.get('[data-testid="list-tv"]').should('exist');
      cy.get('[data-testid="list-tv"]').children().should('have.length', 20);

      cy.get('[data-testid="button-tv"]').should(
        'have.css',
        'background',
        'rgb(234, 179, 8) none repeat scroll 0% 0% / auto padding-box border-box'
      );

      cy.get('[data-testid="list-title"').should(
        'have.text',
        'Listado de shows de tv populares'
      );
    });
  });

  describe('Test load tv shows and change language', () => {
    it('The page should be translated after changing the language.', () => {
      cy.get('[data-testid="button-tv"]').click();
      cy.get('[data-testid="header-selector"]').select('en');

      cy.get('[data-testid="list-title"').should(
        'have.text',
        'List of popular tv shows'
      );
    });
  });

  describe('Test load movies and change language', () => {
    it('The page should be translated after changing the language.', () => {
      cy.get('[data-testid="button-movies"]').click();
      cy.get('[data-testid="header-selector"]').select('en');

      cy.get('[data-testid="list-title"').should(
        'have.text',
        'List of popular movies'
      );
    });
  });

  describe('Test list clean button', () => {
    it('The list should be removed after pressing the clean button.', () => {
      cy.get('[data-testid="button-movies"]').click();

      cy.get('[data-testid="list-movies"]').should('exist');
      cy.get('[data-testid="button-clean"]').click();
      cy.get('[data-testid="list-movies"]').should('not.exist');
    });
  });
});
