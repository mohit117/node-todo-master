const objRepo = require('../locators/locators.json')

export default class HomePage{

    getTextBox()
    {
        return cy.get(objRepo.homePageLocators.textBox)
    }

    getAddButton()
    {
        return cy.get(objRepo.homePageLocators.addButton)
    }

    getToDoNumbers()
    {
        return cy.get(objRepo.homePageLocators.toDoNumbers)
    }

    getFirstTask()
    {
        return cy.get(objRepo.homePageLocators.firsttask)
    }

    getSingleToDos()
    {
        return cy.get(objRepo.homePageLocators.singletask)
    }

    getAllToDos()
    {
        return cy.get(objRepo.homePageLocators.allTasks)
    }

    //Methods

    validateAvailabilityOfElements()
    {
        this.getAddButton().should('exist').and('be.visible')
        this.getTextBox().should('exist').and('be.visible')
        this.getToDoNumbers().should('exist').and('be.visible')
    }

    addTaskInToDoList(task)
    {
        if(task == "" || task == null)
        {
            cy.log("There is no task to add")
            return
        }
            
        this.getTextBox().type(task)
        this.getAddButton().click();
        this.getFirstTask().should('contain', task)
        this.getToDoNumbers().should('contain', 1)
    }

    deleteSingleTask()
    {
            this.getSingleToDos().check()
            this.getSingleToDos().should('not.exist')
            this.getToDoNumbers().should('contain', 0)  
        
    }

    deleteAllTask()
    {
        this.getAllToDos().check()
    }

    

   

    

}