/**
 * 1. click on any button, that raises an alert
 * 2. to verify anything on alert window, use an event i.e. on> cy.on('window:alert', (t)=>{expect(t).to.contains('text on alert')})
 * t = refereing to the new alert window
 */

describe('Alerts', () => {
    //1) Javascript Alert: It will have some text and an 'OK' button 
    
    it('Js alert', ()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts') 
    
    cy.get("button[onclick='jsAlert()']").click();
    cy.on('window: alert', (t)=>{
        expect(t).to.contains( 'I am a JS Alert');
    })
    
    //alert window automatically closed by cypress (important, and you will not be able to see it on the cypress app)
    cy.get("#result").should('have.text', 'You successfully clicked an alert')
})


//2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons 
it('Js confirm alert', ()=>{
    
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window: confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');

    })
      //cypress automatically closed alert window by using ok button-default
    cy.get('#result').should('have.text', 'You clicked: Ok')

})

})