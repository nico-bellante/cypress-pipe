declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Enables you to work with the subject yielded from the previous command.
     * Similar to `cy.then`, except the function can be re-evaluated if followed by
     * a `.should` AND returns a value synchronously (no `cy` commands inside).
     * In this instance, your function should not have any side effects and could be run
     * many times per second.
     * 
     * ```ts
     * cy.get('body')
     *   .pipe($body => $body.children())
     *   .should('have.length', 3)
     * ```
     */
    pipe<S>(
      fn: (this: { [key: string]: any }, currentSubject: Subject) => Chainable<S>,
      options?: Partial<Cypress.Timeoutable & Cypress.Loggable>,
    ): Chainable<S>
    pipe<S extends object | any[] | string | number | boolean>(
      fn: (this: { [key: string]: any }, currentSubject: Subject) => S,
      options?: Partial<Cypress.Timeoutable & Cypress.Loggable>,
    ): Chainable<S>
  }
}
