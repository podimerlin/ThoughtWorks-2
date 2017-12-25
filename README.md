# ThoughtWorks 2

Input file is included input.txt
Input file is text with the talks in each line

Select the input file in the form and hit submit.

Tracks and talks will be shown



There is a main container with the upload form, and a list of Tracks Component.
A Track components contains a Morning Component, an Afternoon Component and a Talk Component for the lunch.
Morning Component and Afternoon Components contains a list of Talk Component.

A talk component will have the properties, title, lengthtext (where lengthtext is the last string of the text line, and the title is the words before that), and length (time in minutes derived from the lenghtext).

Since a morning component starts from 9AM to 12Noon, it can have a maximum of 180 mins. 
For the afternoon component, it starts from 1pm and cannot end before 4pm and not after 5pm. hence a minimum of 420 minutes and max of 480 minutes (since 9AM).

On form upload, the text is splitted into lines and a list of Talks are created accordingly. Since each track can be of a minmum of 420 minutes and max of 480 minutes, the tracks are split such that the total length is between 420 and 480.

A track would then have the correct length of talks. So in a track, fit tracks that are less then 180 mins total for morning, the remaining tracks would be able to fit in the afternoon component. 
Since it is made sure that the tracks will not end past 5pm, a networking Talk will be appended to the afternoon component.

To display the time schedule, a function is used. This function starts with the starting time of 9AM, and adds the minutes according to the previously added Talks in the Morning or Afternoon Component. Since Afternoon Component starts at 1pm, by default, it will be 9AM plus 240mins, before considering the Talks to be appended.