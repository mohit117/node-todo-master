import HomePage from '../pages/HomePage'


describe("ToDo List Test Suite", function(){

    const hpObj = new HomePage();

    this.beforeEach("visit site", function(){
       
      cy.visit(Cypress.env('testUrl'))
        
    })

    it("Validation of availability of elements", function(){

        hpObj.validateAvailabilityOfElements();
    } )


    it("Validation of adding a task to list", function(){
       const task =  "Get Milk"
       hpObj.addTaskInToDoList(task)
    })

    it("Validation deletion of single task from list", function(){
        hpObj.deleteSingleTask()
     })

    



})