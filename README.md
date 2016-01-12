
Technologies used include:
* React to generate the views
* Ruby on Rails on the backend
* PostgreSQL for the data
* Devise for account authorization
* Customized Bootstrap for the CSS

React and Rails were integrated with the <a href="https://github.com/reactjs/react-rails">react-rails gem</a>. In retrospect, I definitely should have integrated it with Node instead ... Rails was a struggle, but Olivier Lance's <a href="https://medium.com/technically-speaking/isomorphic-reactjs-app-with-ruby-on-rails-part-1-server-side-rendering-8438bbb1ea1c#.ucoexco93">tutorial series</a> was a huge help in implementing.

Obstacles included:
* wrangling with Bootstrap weirdness (in retrospect, I would also not use Bootstrap - I customized half of it away, and the rest was more trouble than it was worth)
* I feel like I underutilized React, because all I really made it do was render things ... which probably would have been easier done in regular Rails views.
* discovering that, when prerendering React components (in order to give them access to Rails variables declared in the controller), they do not have access to jQuery ... and some of my prerendered React components needed to make ajax requests.

While building the data for this project, I also created what may be the only public yoga API in existence.