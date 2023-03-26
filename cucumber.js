module.exports = {
  default: {
    publishQuiet: true,
    paths: ['features/**/*.feature'],
    requireModule: ['@babel/register'],
    require: ['src/**/*.js'],
    format: ['@cucumber/pretty-formatter']
  },
};
