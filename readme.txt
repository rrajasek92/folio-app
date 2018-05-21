--------Folio App----------

Installation:
This app was built and deployed using Expo. In order to access it on iOS you must
download "Expo Client" in the app store. After that, open a browser and search
the following url:

https://expo.io/--/to-exp/https%3A%2F%2Fexp.host%2F%40rrajasek92%2FFolio

How to Use:
Once opening up the app, you will be prompted to choose a number between 1
and 10 to describe your risk tolerance level, with 1 being the most risk
averse, to 10 being the most risk prone. After pressing submit, you will be
prompted to enter your current portfolio in dollar amount. Once you enter
this, your dashboard will be displayed. Your dashboard will display what your
ideal portfolio breakdown will look like in the form of a donut chart, and
will also show you the transactions you need to apply to your current portfolio
in order to reach said ideal portfolio.

Design Decisions:
The first thing to point out is that I decided to go with a simple,
minimalistic UX, with white and green as the general color palette. I realized
that this is in fact a very difficult endeavor to undertake, as there is a very
fine line to walk, as "simple" can either look very professional or very amateurish.
I've done my best to make the UX look as clean and professional as possible
but it is entirely possible that it may look barebones and unfinished to some.

For the first component, the risk tolerance level, I decided to use a prebuilt
component that has an animated aspect to it for choosing a risk level (1 to 10).
I've styled it so that the color of the selection gets more intense as the number
of the selection gets more intense (1 is duller, 10 is brighter). The donut charts
animates to the respective model proportions based on the risk level selected.

I used a third party component for the form entry as well, as there were subtle
ux qualities to it that made the app feel more professional. The input is
type-proofed, so only numbers may be provided.

After that we have the Dashboard which uses the user information to generate
a donut chart for their ideal financial portfolio, and a transaction chart for
the necessary transactions necessary to match their ideal portfolio. Ideally,
I would like to have had a tooltip pop up when a slice of the donut chart is pressed
displaying additional information including the percentage of each slice, but as
there are very few available charting libraries/options in Native as of right now,
I was unable to get stable functionality for this.
Another goal for this pie chart was to be able to click the donut hole of the
chart and have a popup that would allow you to change your ideal profile.
I would also have liked to display a more robust transaction table with the user
being able to click on each investment type and change their current portfolio,
but again time did not permit.
When thinking about "production ready," there were several additional features
that I left out considering my goal for time.
  -Internationalization: Having different languages. There are a number of different
   packages that I found including 'react-native-localization' that would help
   in building a more robust internationalized experience.
  -User sessions: Had this been a more complex app, creating user profiles would
   have been a pretty big change to make this feel like a production level app.
   I would have used google auth resources along with likely firebase or gcp
   to create authentication apis that would allow a user to remain logged in and
   save their user information.
  -Resizing based on device orientation: It seemed that the default configuration
   for many iOS and Android apps locks orientation into landscape or portrait, so
   this wasn't something I considered for an app with this scope at first, but
   thinking about it, this would definitely help provide a more tactile and
   interactive user experience
  -Platform Optimized components: Certain things looked better in iOS, others in
   Android. There is functionality within React Native to identify which platform
   is being used so this shouldn't be too difficult, but in the interest of time
   I avoided this for now.

All of these planned features would utilize redux heavily.


Code Breakdown:
My overall approach was to of course make the project as modular and clean as
possible. I utilized redux to store both user inputs (risk tolerance level and
current portfolio). My backend recommendation engine in /src/functions/recommendationEngine.js
used this user data to create a standard data distribution for their ideal model.
From there the transaction logic takes the user portfolio and calculates the minimum
necessary transactions to match their ideal portfolio. The Transaction list component
displays the resulting JSON as Transaction Cards showing the suggested money transfers
between investments.
These functions can be found in /src/functions as both part of the recommendation 
engine and as helper functions.
I used react-navigation as my router, with configuration in the /src/navigation/config
directory. App.js (the root component) renders a RootStack component, which is a
StackNavigator component (from react-navigation) that utilizes my router configuration.
Pages are stored as "screens" in the /src/screens directory and follow a linear
path of Welcome => Enter Risk => Enter Portfolio => Display Dashboard. From the Dashboard
"Start Over" can be selected to start the flow again.
"this.props.navigation" is passed as props to children components within each
screen so that they themselves can control the route changes. I additionally created
a "clean navigator" in my helper functions to prevent android users from using the
back button however, some debugging needs to still be done on it before using it,
which would take more time than I'm willing to spend within my current timeline.

Migrating to React.js:
Looking into React.js, the primary difference between it and Native is that React
uses html tags to build out component, while Native uses pre-built JSX components.
One way I thought of making the code more translatable was to build out fundamental
React Native JSX tags such as View and Text using divs, etc. so that if a React dev
wanted to reuse Native code, they could simply import such components from a custom
library rather than from the 'react-native' node package as in Native. These can be
found in /src/components/react-native-components

In regards to Foundation:
I was unfortunately not able to find a 1:1 equivalent for Foundation that is usable
in Native, and had to settle for a similar alternative in React Native Elements

Final Thoughts:
Overall the project took about 15 hours in total, 5 more hours than the projected
time frame. A good part of my time was spent planning and finding/testing third party components
that actually worked. The rest of my time was split between fine tuning UX to make it look as
professional as possible and a certain bug that I encountered when implementing redux.
Sizing in particular was difficult to balance, especially in regards to iOS. The
redux bug I encountered was a simple one, but took quite a long time to figure out.
As I haven't worked with React Native extensively in many months, and due to the
fact that this is a constantly changing/updating framework it took a little while
to catch back up to speed as far as small changes in the usage of the framework.
