# DATA

## Data layer

- List of robots:

  - id (database)
  - name: string
  - image: string
  - caracteristics:
    - speed: number
    - endurance: number
    - creation date: date

## Data modifications

- Load robots
- Delete robot
- Add robot
- Modify robot

# COMPONENTS

## App

- Show layout component

## Layout

- Show header
- Show list "Robots list" title with heading
- Show robots list component
- Show a button to create a robot

## Robots list

- Recieves list of robots

- Show a list of robots
- Show a robot card component for every robot in the list of robots

- Sends a robot to each robot card component

## Robot card

- Recieves delete robot action
- Recieves modify robot action

- Recieves a robot

- Show robot name inside heading
- Shows a image of a robot.
- Shows speed, endurance and creation date of each robot.

- Show button component to modify robot
- Show button component to delete robot

- Sends "MODIFY" text/icon to button component
- Sends "DELETE" text/icon to button component

- Sends modify robot action to button component to go to ModifyForm
- Sends delete robot action to button component that deletes robot

## Button

- Recieves an icon
- Recieves an action

- Show the recieved icon inside a button

- On click executes the recieved action

## Form

- Receives the add robot action
- Shows inputs to receive data to create a robot

- Shows a button "Create" to submit the form
- Shows a button "Modify" to submit the form

- On submit executes the received create robot action
- On submit executes the received modify robot action
