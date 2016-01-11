# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

asanas = Asana.create([
	{
    sanskrit_name: "Adho Mukha Svanasana",
    english_name: "Downward-Facing Dog",
    img_url: "https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1"
	}
])

asanas = Asana.create([
	{
    sanskrit_name: "Balasana",
    english_name: "Child's Pose",
    img_url: "https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1"
	}
])