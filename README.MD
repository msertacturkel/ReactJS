mkdir reactjs-basics
cd reactjs-basics/
brew search npm
brew install npm
brew info npm
ls
npm init
ls
ls -al /Users/sertac.turkel/.config
npm install react react-dom --save
#prod: npm install react react-dom --save
npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 babel-core --save-dev
#dev:npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 babel-core --save-dev
npm start

git init
ls
touch .gitignore
git status -s
git add .
git commit -m "setup"
history

#####React Router####
npm install --save react-router