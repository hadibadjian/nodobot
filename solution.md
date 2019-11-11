|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| 0,4 |     |     |     | 4,4 |
| 0,3 |     |     |     |     |
| 0,2 |     |     |     |     |
| 0,1 |     |     |     |     |
| 0,0 | 1,0 | 2,0 | 3,0 | 4,0 |

- First command has to be PLACE
- PLACE command format is (\d)\s*,\s*(\d)\s*,\s*(NORTH|SOUTH|EAST|WEST)
- Subsequent commands are MOVE, LEFT, RIGHT, PLACE and REPORT

- Ignore subsequent commands if robot is not on the table
- Ignore all commands in the sequence until the first valid PLACE

- MOVE moves the robot one unit in its current direction
- LEFT and RIGHT rotates the robot 90 degrees in specified direction
- REPORT announces the robot position and the direction it is facing
- Any move that causes the robot to fall off the table must be ignored
