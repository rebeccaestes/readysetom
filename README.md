
Technologies used include:
* React to generate (most of) the views
* Ruby on Rails on the backend
* PostgreSQL for the data
* Devise for account authorization
* Customized Bootstrap for the CSS
* Dropbox to host the icons, which I got from The Noun Project
* jQuery UI Sortable plugin for the drag-and-drop functionality

React and Rails were integrated with the <a href="https://github.com/reactjs/react-rails">react-rails gem</a>. In retrospect, Node would have been an easier integration, but Olivier Lance's <a href="https://medium.com/technically-speaking/isomorphic-reactjs-app-with-ruby-on-rails-part-1-server-side-rendering-8438bbb1ea1c#.ucoexco93">tutorial series</a> was a big help in implementing.

Obstacles included:
* wrangling with Bootstrap weirdness (in retrospect, I would also not use Bootstrap - I customized half of it away, and the rest was more trouble than it was worth)
* While I could access Rails variables in React, the only thing I figured out how to export <i>from</i> React was rendered views. So I could render data I'd manipulated with Javascript, but outside of React, any of its variables were useless.
* I tried to get React to pull asana data from an API, but it kept insisting the address didn't exist. Even though it definitely did.
* I first rendered the sequence of asanas with React, but there was a weird bug where no matter how many instances of an asana you added, it would only display one. So I ended up rendering that view in Rails.

In future iterations, I'd like to:
* Be able to actually save order changes in sequences!
* Replace the drop-down menus, in favor of adding asanas to your sequence by clicking on them
* Implement a search-box plugin for asanas
* Allow users the option to share their sequences and custom asanas publically
* Let users copy other users' custom asanas to their own account, and favorite other users' sequences
* Generally React-ify the project ... although I'm not sure how plausible that would be without completely restructuring it.

While building the data for this project, I also created <a href="http://github.com/rebeccaestes/yoga_api">what may be the only public yoga API in existence</a>.
