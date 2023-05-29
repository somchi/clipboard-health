# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Create a db table called FacilityAssignedAgent that allows facilities to pick agents they want to work with.
    a. Time estimate: A day task
    b. Criteria: The table should have
        1. facility Id
        2. shift id
        3. custom Id (This should be an optional field and the value must be unique)
        4. dateCreated
    c. implementation details: Create an additional database that will map agents assigned to facilities shifts directly to the facilities.
2. Retrieve all agents currently assigned to a facility's shift and 
   a. Time estimate: 1 days task
   b. Criteria: The function should accept the facility' id and return a list of the agents that have been assigned to that facility's shifts. The returned data should include the following metadata activeShift, the date assigned, agent name, facility id, clocked in, clocked out, and shift id.
   c. Implementation: Create a function that will be used to retrieve all the agents currently working on a facilities shift. Using the id of the facility iterate through the shifts table and find all shifts created by the facility and then get all the agents on the various shifts as a data set
3. Include the ability for a  facility to assign an agent a custom id.
   a. Time estimate: 1 days task
   b. Criteria: The function takes facility id, shift id, and custom id as parameters and returns the provided data alongside the other auto generate data as required by the table. 
   c. Implementation: The facility should be able to assign custom ids to the agents, this should be achieved by creating a function that will allow this action to be added to the FacilitiesAssignedAgents table
4. Report generating feature.
    a. Time estimate:
    b. Criteria: This function should take the following parameters: start date, and custom id and generate a pdf that can be submitted or downloaded by the facility. 
    c. Implementation:  Create a function that will generate reports on custom id bases. Query the  FacilityAssignedAgent table by the custom id provided. 
with the retrieved data, query the shift table with the id of the agent gotten by the initial query and the date for a list of all the shifts assigned to that agent and then call the generateReport function passing the list of generated shifts. 

