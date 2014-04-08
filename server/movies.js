//Declare server Movies collection
Movies = new Meteor.Collection("movies");

//Seed the movie database with a few movies
Meteor.startup(function () {
    if (Movies.find().count() == 0) {
        Movies.insert({ title: "star Wars", director: "Lucas" });
        Movies.insert({ title: "Mementon", director: "Nolan" });
        Movies.insert({ title: "King Kong", director: "Jackson" });
    }
});

