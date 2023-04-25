const exercises = [
  {
    target: 'Lower back',
    name: 'Superman',
    type: 'Bodyweight',
    muscle: 'LB',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://example.com/superman.jpg',
    instructions: '1. Lie face down on the ground with your arms extended above your head.\n2. Simultaneously lift your arms, legs, and chest off the ground as high as you can. Hold for a few seconds, then lower back down.'
  },
  {
    target: 'Lower back',
    name: 'Back Extension',
    type: 'Isolation',
    muscle: 'LB',
    equipment: 'Roman chair',
    difficulty: 'Intermediate',
    photo: 'https://example.com/back-extension.jpg',
    instructions: '1. Position your hips against the back pad of the roman chair.\n2. Cross your arms over your chest and lower your upper body forward, keeping your back straight.\n3. Slowly raise your upper body back up to the starting position.'
  },
  {
    target: 'Lower back',
    name: 'Deadlift',
    type: 'Compound',
    muscle: 'LB, H',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    photo: 'https://example.com/deadlift.jpg',
    instructions: '1. Stand with your feet shoulder-width apart and grip the bar with your hands just outside your knees.\n2. Keeping your back straight, lift the bar by pushing your hips forward and standing up.\n3. Lower the bar back down to the ground.'
  },
  {
    target: 'Knee',
    name: 'Step-ups',
    type: 'Bodyweight',
    muscle: 'Q, H',
    equipment: 'Box or step',
    difficulty: 'Beginner',
    photo: 'https://example.com/step-ups.jpg',
    instructions: '1. Stand in front of a box or step.\n2. Step up onto the box with your right foot, then step down with your left foot.\n3. Repeat, alternating legs.'
  },
  {
    target: 'Knee',
    name: 'Lunges',
    type: 'Bodyweight',
    muscle: 'Q, H',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://example.com/lunges.jpg',
    instructions: '1. Stand with your feet shoulder-width apart.\n2. Take a big step forward with your right foot, then lower your body until your right knee is bent at least 90 degrees.\n3. Push back up to the starting position and repeat with your left leg.'
  },
  {
    target: 'Knee',
    name: 'Wall Sit',
    type: 'Isometric',
    muscle: 'Q',
    equipment: 'Wall',
    difficulty: 'Beginner',
    photo: 'https://example.com/wall-sit.jpg',
    instructions: '1. Stand with your back against a wall and your feet shoulder-width apart.\n2. Slide your back down the wall until your knees are bent at a 90-degree angle and your thighs are parallel to the ground.\n3. Hold this position for as long as you can.'
  },
  {
    target: 'Arthritis',
    name: 'Water Aerobics',
    type: 'Low-Impact Cardio',
    muscle: 'Full Body',
    equipment: 'Pool',
    difficulty: 'Beginner',
    photo: 'https://example.com/water-aerobics.jpg',
    instructions: '1. Stand in chest-deep water with your feet shoulder-width apart.\n2. Move your arms and legs in a controlled manner to increase your heart rate.\n3. Repeat for 30 minutes.'
  },
  {
    target: 'Arthritis',
    name: 'Yoga',
    type: 'Flexibility',
    muscle: 'Full Body',
    equipment: 'Mat',
    difficulty: 'Beginner',
    photo: 'https://example.com/yoga.jpg',
    instructions: '1. Choose a pose that is comfortable for you, such as child\'s pose or downward-facing dog.\n2. Hold the pose for 30 seconds.\n3. Repeat 3-5 times.'
  },
  {
    target: 'Arthritis',
    name: 'Resistance Band Rows',
    type: 'Strength Training',
    muscle: 'Back',
    equipment: 'Resistance Band',
    difficulty: 'Intermediate',
    photo: 'https://example.com/resistance-band-rows.jpg',
    instructions: '1. Attach a resistance band to a sturdy anchor, such as a doorknob or bedpost.\n2. Stand with your feet shoulder-width apart and grasp the resistance band handles.\n3. Pull the resistance band towards your chest, squeezing your shoulder blades together.\n4. Release and repeat for 10-15 repetitions.'
  },
  {
    target: 'Balance Issues',
    name: 'Single Leg Balance',
    type: 'Balance',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://example.com/single-leg-balance.jpg',
    instructions: '1. Stand with your feet hip-width apart.\n2. Shift your weight onto your left foot.\n3. Lift your right foot off the ground and balance on your left foot for 30 seconds.\n4. Repeat on the other side.'
  },
  {
    target: 'Balance Issues',
    name: 'Heel-to-Toe Walk',
    type: 'Balance',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Intermediate',
    photo: 'https://example.com/heel-to-toe-walk.jpg',
    instructions: '1. Stand with your feet touching heel-to-toe.\n2. Take a step forward with your right foot, placing it in front of your left foot.\n3. Take a step forward with your left foot, placing it in front of your right foot.\n4. Repeat for 10-15 steps.'
  },
  {
    target: 'Balance Issues',
    name: 'Standing Leg Swings',
    type: 'Balance',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://example.com/standing-leg-swings.jpg',
    instructions: '1. Stand with your feet hip-width apart.\n2. Shift your weight onto your left foot.\n3. Swing your right leg forward and backward, keeping your toes pointed.\n4. Repeat for 10-15 swings.\n5. Repeat on the other side.'
  },
  {
    target: 'Hip Pain/Injury',
    name: 'Clamshells',
    type: 'Strength',
    muscle: 'Hip abductors',
    equipment: 'Resistance band',
    difficulty: 'Beginner',
    photo: 'https://example.com/clamshells.jpg',
    instructions: '1. Lie on your side with your knees bent and a resistance band looped around your thighs.\n2. Keeping your feet together, lift your top knee up as high as you can while keeping your hips stacked.\n3. Lower your knee back down.\n4. Repeat for 10-15 reps on each side.'
  },
  {
    target: 'Hip Pain/Injury',
    name: 'Hip Bridges',
    type: 'Strength',
    muscle: 'Glutes, hamstrings',
    equipment: 'None',
    difficulty: 'Beginner',
    photo: 'https://example.com/hip-bridges.jpg',
    instructions: '1. Lie on your back with your knees bent and feet flat on the ground.\n2. Lift your hips up towards the ceiling, squeezing your glutes.\n3. Lower your hips back down to the ground.\n4. Repeat for 10-15 reps.'
  },
  {
    target: 'Hip Pain/Injury',
    name: 'Seated Hip Flexor Stretch',
    type: 'Stretch',
    muscle: 'Hip flexors',
    equipment: 'Chair',
    difficulty: 'Beginner',
    photo: 'https://example.com/seated-hip-flexor-stretch.jpg',
    instructions: '1. Sit on the edge of a chair.\n2. Extend one leg out in front of you with your heel on the ground.\n3. Keep your other foot on the ground and lean forward slightly, feeling a stretch in your hip flexor.\n4. Hold for 30 seconds.\n5. Repeat on the other side.'
  } 
]

// Export the seed data to `models/index.js`
module.exports = exercises
