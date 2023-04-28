const exercises = [
  {
    target: 'Lower back',
    name: 'Superman',
    type: 'Bodyweight',
    muscle: 'LB',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://media.istockphoto.com/id/1162990494/vector/woman-doing-exercise-with-superman-position-in-2-step-for-guide.jpg?s=612x612&w=0&k=20&c=UIGYSx79-4nUBZNw31hEIbHRH3_TCC3Sj4a9sEXROzk=',
    gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-back-extension.gif',
    instructions: '1. Lie face down on the ground with your arms extended above your head.\n2. Simultaneously lift your arms, legs, and chest off the ground as high as you can. Hold for a few seconds, then lower back down.'
  },
  {
    target: 'Lower back',
    name: 'Back Extension',
    type: 'Isolation',
    muscle: 'LB',
    equipment: 'Roman chair',
    difficulty: 'Intermediate',
    photo: 'https://media.istockphoto.com/id/1312067031/vector/woman-doing-back-extensions-hyperextensions-outdoor-equipment-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=Ngyqef4Qddg3chVbKeo2nBPrJa8dKdbBSpkTNG8y8GQ=',
    gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension.gif',
    instructions: '1. Position your hips against the back pad of the roman chair.\n2. Cross your arms over your chest and lower your upper body forward, keeping your back straight.\n3. Slowly raise your upper body back up to the starting position.'
  },
  {
    target: 'Knee',
    name: 'Step-ups',
    type: 'Bodyweight',
    muscle: 'Q, H',
    equipment: 'Box or step',
    difficulty: 'Beginner',
    photo: 'https://img.freepik.com/premium-vector/step-up-exercise-woman-workout-fitness-aerobic-exercises_476141-783.jpg',
    gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/07/dumbbell-step-up.gif',
    instructions: '1. Stand in front of a box or step.\n2. Step up onto the box with your right foot, then step down with your left foot.\n3. Repeat, alternating legs.'
  },
  {
    target: 'Knee',
    name: 'Lunges',
    type: 'Bodyweight',
    muscle: 'Q, H',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://img.freepik.com/premium-vector/sportswoman-showing-dynamic-lunges-semi-flat-color-vector-character_151150-11597.jpg?w=2000',
    gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Bodyweight-Walking-Lunge.gif',
    instructions: '1. Stand with your feet shoulder-width apart.\n2. Take a big step forward with your right foot, then lower your body until your right knee is bent at least 90 degrees.\n3. Push back up to the starting position and repeat with your left leg.'
  },
  {
    target: 'Arthritis',
    name: 'Water Aerobics',
    type: 'Low-Impact Cardio',
    muscle: 'Full Body',
    equipment: 'Pool',
    difficulty: 'Beginner',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyymW1VDMr-rpsd4iI1iuAm8YcdAecj8vNaA&usqp=CAU',
    gif: 'https://i.pinimg.com/originals/9a/8d/0d/9a8d0d316945f36869a666763fbd5bc9.gif',
    instructions: '1. Stand in chest-deep water with your feet shoulder-width apart.\n2. Move your arms and legs in a controlled manner to increase your heart rate.\n3. Repeat for 30 minutes.'
  },
  {
    target: 'Arthritis',
    name: 'Yoga',
    type: 'Flexibility',
    muscle: 'Full Body',
    equipment: 'Mat',
    difficulty: 'Beginner',
    photo: 'https://img.freepik.com/free-vector/girl-doing-yoga-cartoon-character_1308-118683.jpg',
    gif: 'https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/1799361.gif',
    instructions: '1. Choose a pose that is comfortable for you, such as child\'s pose or downward-facing dog.\n2. Hold the pose for 30 seconds.\n3. Repeat 3-5 times.'
  },
  {
    target: 'Balance Issues',
    name: 'Single Leg Balance',
    type: 'Balance',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://lirp.cdn-website.com/1029fcf4/dms3rep/multi/opt/Single-Leg-Stand-354x400-640w.jpg',
    gif: 'https://thumbs.gfycat.com/UnacceptableOrganicDove-size_restricted.gif',
    instructions: '1. Stand with your feet hip-width apart.\n2. Shift your weight onto your left foot.\n3. Lift your right foot off the ground and balance on your left foot for 30 seconds.\n4. Repeat on the other side.'
  },
  {
    target: 'Balance Issues',
    name: 'Heel-to-Toe Walk',
    type: 'Balance',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Intermediate',
    photo: 'https://www.saebo.com/wp-content/uploads/2015/11/intermediate-heel-toe-1.png',
    gif: 'https://workouttrends.com/wp-content/uploads/2014/05/heel-to-toe-walk.jpg',
    instructions: '1. Stand with your feet touching heel-to-toe.\n2. Take a step forward with your right foot, placing it in front of your left foot.\n3. Take a step forward with your left foot, placing it in front of your right foot.\n4. Repeat for 10-15 steps.'
  },
  {
    target: 'Hip Pain/Injury',
    name: 'Clamshells',
    type: 'Strength',
    muscle: 'Hip abductors',
    equipment: 'Resistance band',
    difficulty: 'Beginner',
    photo: 'https://thumbs.dreamstime.com/b/woman-doing-clamshells-illustrations-glute-exercises-workouts-flat-vector-illustration-woman-doing-clamshells-illustrations-151446317.jpg',
    gif: 'https://www.spotebi.com/wp-content/uploads/2015/05/clamshell-exercise-illustration.gif',
    instructions: '1. Lie on your side with your knees bent and a resistance band looped around your thighs.\n2. Keeping your feet together, lift your top knee up as high as you can while keeping your hips stacked.\n3. Lower your knee back down.\n4. Repeat for 10-15 reps on each side.'
  },
  {
    target: 'Hip Pain/Injury',
    name: 'Hip Bridges',
    type: 'Strength',
    muscle: 'Glutes, hamstrings',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp-bq5w4uBZxAC2OVtN_YX0hMwhCuEyHK6g&usqp=CAU',
    gif: 'https://www.spotebi.com/wp-content/uploads/2015/01/glute-bridge-exercise-illustration-spotebi.gif',
    instructions: '1. Lie on your back with your knees bent and feet flat on the ground.\n2. Lift your hips up towards the ceiling, squeezing your glutes.\n3. Lower your hips back down to the ground.\n4. Repeat for 10-15 reps.'
  },
]

// Export the seed data to `models/index.js`
module.exports = exercises
