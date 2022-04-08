# Recharts-Storybook

Using this [repo](https://github.com/Nikhil-Kumaran/minimal-reactjs-boilerplate) I created the beginning of our react project.

We had to use the repository above because recharts is incompatible with the latest version of React (which at the moment of writing is v17)

I then ran the commands:
npm install recharts
npx sb init

To get recharts and storybook into the project.

After the above has happened, I followed along with [this guide](https://dev.to/kouts/deploy-storybook-to-github-pages-3bij) to hookup github pages to the storybook in the repo.

# How to run application locally

Simply running the command `npm run start` will create a folder ./build, then it will run the storybook-build command, and place the contents of the build into the ./build folder.

Then finally the command storybook-start will be ran to actually start the application.

# How to have changes placed onto the github pages website

Once you have new changes staged and committed, simply pushing the changes onto Main will cause the github build and deploy actions to create a build, and then deploy that build onto the github pages branch.