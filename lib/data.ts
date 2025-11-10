export interface Anime {
  id: number;
  title: string;
  rating: number;
  episodes: number;
  season: string;
  imageUrl: string;
  shortSummary: string;
  longSummary: string;
  communityReview: {
    pros: string[];
    cons: string[];
  };
  genres: string[];
  studio: string;
  status: string;
  views?: string;
}

export const animeDatabase: Anime[] = [
  {
    id: 1,
    title: "Attack on Titan: Final Season",
    rating: 9.3,
    episodes: 28,
    season: "Winter 2024",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    shortSummary: "The epic conclusion to humanity's battle against the Titans reaches its climax with shocking revelations and intense warfare.",
    longSummary: "In the final season, Eren Yeager and the Survey Corps face their ultimate challenge as the truth about the world beyond the walls is revealed. The story shifts perspective, exploring the complex geopolitical landscape and the moral ambiguity of war. As alliances shift and new enemies emerge, the fate of humanity hangs in the balance. The series culminates in breathtaking battles, emotional character moments, and a controversial ending that challenges viewers' perceptions of right and wrong. With stunning animation and a gripping narrative, this conclusion delivers on years of buildup while exploring themes of freedom, cycle of hatred, and the cost of revenge.",
    communityReview: {
      pros: [
        "Outstanding animation quality and cinematography",
        "Deep, morally complex narrative that challenges viewers",
        "Character development reaches emotional peaks",
        "Epic battle sequences with strategic depth",
        "Phenomenal soundtrack by Hiroyuki Sawano"
      ],
      cons: [
        "Controversial ending divided the fanbase",
        "Pacing issues in some episodes",
        "CGI Titans occasionally feel jarring",
        "Complex plot requires full attention"
      ]
    },
    genres: ["Action", "Drama", "Fantasy"],
    studio: "MAPPA",
    status: "Completed",
    views: "45.2M"
  },
  {
    id: 2,
    title: "Demon Slayer: Hashira Training Arc",
    rating: 8.9,
    episodes: 11,
    season: "Spring 2024",
    imageUrl: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
    shortSummary: "Tanjiro and his friends undergo intense training with the Hashira to prepare for the final battle against Muzan.",
    longSummary: "Following the aftermath of the Entertainment District arc, the Demon Slayer Corps prepares for their final confrontation with Muzan Kibutsuji. Tanjiro Kamado, along with Zenitsu and Inosuke, must train under each of the Hashira to unlock their full potential. The arc focuses on character development, showcasing the unique personalities and fighting styles of each Hashira while building tension for the climactic final battle. Through rigorous training montages and heartfelt moments, viewers witness the growth of our heroes as they push beyond their limits. The season balances intense action with emotional storytelling, exploring themes of perseverance, friendship, and sacrifice.",
    communityReview: {
      pros: [
        "Breathtaking animation by ufotable",
        "Character bonding and development",
        "Beautiful fight choreography",
        "Perfect balance of humor and serious moments",
        "Builds excitement for the final arc"
      ],
      cons: [
        "Slower pacing compared to previous seasons",
        "Limited demon encounters",
        "Some episodes feel like filler",
        "Training sequences can be repetitive"
      ]
    },
    genres: ["Action", "Supernatural", "Adventure"],
    studio: "ufotable",
    status: "Completed",
    views: "38.7M"
  },
  {
    id: 3,
    title: "Frieren: Beyond Journey's End",
    rating: 9.4,
    episodes: 28,
    season: "Fall 2023",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    shortSummary: "An elf mage embarks on a new journey to understand humanity and cherish the memories of her fallen companions.",
    longSummary: "After defeating the Demon King, the legendary hero party disbands. Frieren, an immortal elf mage, realizes she barely knew her companions despite adventuring together for years. When the human hero Himmel passes away, Frieren is struck by profound regret and embarks on a journey to understand humanity and the meaning of the brief connections she made. The series is a meditation on time, mortality, and relationships, told through Frieren's eyes as she revisits old places and meets new companions. With stunning animation and a melancholic yet hopeful tone, the show explores what it means to truly know someone and how we deal with loss and memory. Each episode reveals more about Frieren's past adventures while developing her present relationships.",
    communityReview: {
      pros: [
        "Beautifully contemplative and emotional storytelling",
        "Exceptional character writing and development",
        "Gorgeous animation and art direction",
        "Unique take on the fantasy genre",
        "Perfect soundtrack that enhances every scene",
        "Thoughtful exploration of time and mortality"
      ],
      cons: [
        "Slow pacing may not appeal to everyone",
        "Minimal action in some episodes",
        "Can feel melancholic and heavy",
        "Non-linear storytelling might confuse some viewers"
      ]
    },
    genres: ["Fantasy", "Drama", "Adventure"],
    studio: "Madhouse",
    status: "Completed",
    views: "42.1M"
  },
  {
    id: 4,
    title: "Jujutsu Kaisen Season 2",
    rating: 8.8,
    episodes: 23,
    season: "Summer 2023",
    imageUrl: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop",
    shortSummary: "The past of Gojo Satoru is revealed before the devastating Shibuya Incident changes everything.",
    longSummary: "Split into two arcs, this season first explores Gojo Satoru's past and his friendship with Geto Suguru during their time at Jujutsu High. The Hidden Inventory arc reveals the events that shaped Gojo into the strongest sorcerer and led to Geto's descent into darkness. The second half depicts the catastrophic Shibuya Incident, where curses and curse users launch a coordinated attack to seal Gojo Satoru. The arc is filled with spectacular battles, shocking deaths, and game-changing revelations that fundamentally alter the status quo of the series. MAPPA delivers some of the best-animated fight sequences in recent anime history, particularly the Gojo vs Toji and Sukuna's rampage through Shibuya.",
    communityReview: {
      pros: [
        "Incredible animation and fight choreography",
        "Gojo's backstory is emotionally powerful",
        "Shibuya Incident delivers non-stop intensity",
        "Character deaths have real weight and impact",
        "Outstanding soundtrack and sound design"
      ],
      cons: [
        "Very dark and brutal content",
        "Animator working conditions were concerning",
        "Some CGI elements in crowd scenes",
        "Ending leaves many questions unanswered"
      ]
    },
    genres: ["Action", "Supernatural", "Horror"],
    studio: "MAPPA",
    status: "Completed",
    views: "41.5M"
  },
  {
    id: 5,
    title: "Spy x Family Season 2",
    rating: 8.4,
    episodes: 12,
    season: "Fall 2023",
    imageUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
    shortSummary: "The Forger family continues their chaotic double lives while growing closer as a fake family.",
    longSummary: "Loid Forger (Twilight), Yor Forger (Thorn Princess), and Anya Forger continue to navigate their complex lives while maintaining their fake family facade. This season introduces new challenges, including Anya's friendship dynamics at Eden Academy, Yor's jealousy arc, and more dangerous missions for Loid. The series excels at balancing action, comedy, and heartwarming family moments. Despite their initial arrangement being purely transactional, the Forgers begin to genuinely care for each other, creating touching moments amidst the spy thriller antics. The show's charm lies in its characters' obliviousness to each other's secrets while viewers enjoy the dramatic irony. Bond, the precognitive dog, continues to add delightful chaos to the family dynamic.",
    communityReview: {
      pros: [
        "Perfect blend of action, comedy, and wholesome moments",
        "Anya remains one of anime's most adorable characters",
        "Strong character dynamics and development",
        "Beautiful animation and character designs",
        "Accessible to all age groups"
      ],
      cons: [
        "Slower pacing than Season 1",
        "Some episodes feel like filler",
        "Lack of major plot progression",
        "Reduced focus on spy missions"
      ]
    },
    genres: ["Action", "Comedy", "Slice of Life"],
    studio: "Wit Studio & CloverWorks",
    status: "Completed",
    views: "35.8M"
  },
  {
    id: 6,
    title: "Vinland Saga Season 2",
    rating: 9.1,
    episodes: 24,
    season: "Winter 2023",
    imageUrl: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop",
    shortSummary: "Thorfinn seeks redemption and a new purpose after years of revenge consumed his life.",
    longSummary: "After the dramatic conclusion of Season 1, Thorfinn has been enslaved and works on Ketil's farm alongside Einar, a fellow slave. Broken and hollow, Thorfinn must confront his past and find a new reason to live beyond revenge. This season shifts from action-heavy Viking battles to a more contemplative, character-driven narrative exploring themes of pacifism, guilt, and redemption. Through his friendship with Einar and the influence of other farm residents, Thorfinn slowly heals and begins to understand the true meaning of being a warrior. The season builds to a tense confrontation that tests Thorfinn's newfound principles. It's a masterful exploration of how one can break the cycle of violence and choose a different path.",
    communityReview: {
      pros: [
        "Profound character development and transformation",
        "Mature themes handled with nuance",
        "Beautiful cinematography and direction",
        "Emotional depth and philosophical substance",
        "Realistic portrayal of trauma and recovery"
      ],
      cons: [
        "Much slower pacing than Season 1",
        "Significantly less action",
        "Farm arc may feel boring to some",
        "Requires patience and emotional investment"
      ]
    },
    genres: ["Drama", "Adventure", "Action"],
    studio: "MAPPA",
    status: "Completed",
    views: "28.3M"
  },
  {
    id: 7,
    title: "Chainsaw Man",
    rating: 8.6,
    episodes: 12,
    season: "Fall 2022",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    shortSummary: "A young man merges with his devil dog to become Chainsaw Man and joins devil hunters.",
    longSummary: "Denji is a desperate young man drowning in debt to the yakuza. After being killed and merging with his devil dog Pochita, he's reborn as Chainsaw Man - a devil-human hybrid with chainsaws for arms. Recruited by the mysterious Makima into the Public Safety Devil Hunters, Denji finally has a chance at a normal life with regular meals and simple dreams. The series subverts typical shonen tropes with its raw, visceral action and morally gray characters. Denji's straightforward desires (food, shelter, and touching breasts) contrast sharply with the dark, violent world of devil hunting. MAPPA's adaptation features cinematic direction, different ending themes for each episode, and brutal, creative fight scenes that showcase Chainsaw Man's wild combat style.",
    communityReview: {
      pros: [
        "Unique and subversive take on shonen genre",
        "Exceptional animation and cinematography",
        "Memorable and complex characters",
        "Perfectly captures the manga's tone",
        "12 unique ending songs"
      ],
      cons: [
        "Slower pacing than manga readers expected",
        "Ends just as story gets more intense",
        "Some CGI chainsaw sequences",
        "Very violent and not for everyone"
      ]
    },
    genres: ["Action", "Horror", "Supernatural"],
    studio: "MAPPA",
    status: "Completed",
    views: "33.9M"
  },
  {
    id: 8,
    title: "Bocchi the Rock!",
    rating: 8.7,
    episodes: 12,
    season: "Fall 2022",
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=600&fit=crop",
    shortSummary: "An extremely shy girl pursues her dream of being a rock guitarist by joining a band.",
    longSummary: "Hitori 'Bocchi' Gotoh is a lonely high school girl with crippling social anxiety who has spent years mastering guitar alone in her room, posting videos online as 'guitarhero.' When she's suddenly recruited to join a band called Kessoku Band, she's forced to confront her fears and interact with others. The series follows Bocchi's hilarious struggles with social situations while showcasing the band's growth and their journey in the indie music scene. What sets this apart from typical 'cute girls doing cute things' anime is its experimental visual style, genuine portrayal of social anxiety, and incredible attention to detail in the music performances. The show perfectly balances relatable comedy with heartfelt moments of personal growth.",
    communityReview: {
      pros: [
        "Hilariously relatable portrayal of social anxiety",
        "Innovative and creative visual direction",
        "Actually good music and performances",
        "Wholesome character relationships",
        "Perfect blend of comedy and emotional moments"
      ],
      cons: [
        "Bocchi's anxiety can be uncomfortable to watch",
        "Music genre may not appeal to everyone",
        "Some humor is very specific to Japanese culture",
        "Standard slice-of-life structure"
      ]
    },
    genres: ["Comedy", "Slice of Life", "Music"],
    studio: "CloverWorks",
    status: "Completed",
    views: "19.7M"
  },
  {
    id: 9,
    title: "My Hero Academia Season 7",
    rating: 8.3,
    episodes: 21,
    season: "Spring 2024",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0b61?w=400&h=600&fit=crop",
    shortSummary: "The final war between heroes and villains reaches its climax as Deku faces his ultimate challenge.",
    longSummary: "The seventh season depicts the climactic Final War arc where pro heroes and students of U.A. High School mount their final stand against All For One, Tomura Shigaraki, and the Paranormal Liberation Front. As society crumbles and heroes fall, Deku must master his quirks and face his destiny as the inheritor of One For All. The season features multiple simultaneous battles across different fronts, giving spotlight moments to various characters who have been developed throughout the series. With emotional farewells, surprising betrayals, and explosive battles, the stakes have never been higher. Studio Bones delivers consistent quality animation during key battles while exploring the themes of heroism, sacrifice, and what it truly means to save someone.",
    communityReview: {
      pros: [
        "Epic scale of the final battles",
        "Many characters get spotlight moments",
        "Emotional payoffs for long-running plot threads",
        "Strong animation during key fights",
        "Deku's character arc reaches new heights"
      ],
      cons: [
        "Animation quality inconsistent in some episodes",
        "Pacing issues with too many simultaneous battles",
        "Some character deaths lack proper buildup",
        "Feels rushed compared to manga"
      ]
    },
    genres: ["Action", "Superhero", "Adventure"],
    studio: "Bones",
    status: "Ongoing",
    views: "31.2M"
  },
  {
    id: 10,
    title: "Oshi no Ko Season 2",
    rating: 8.5,
    episodes: 13,
    season: "Summer 2024",
    imageUrl: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=400&h=600&fit=crop",
    shortSummary: "Aqua and Ruby continue pursuing their goals in the entertainment industry while unraveling dark secrets.",
    longSummary: "Following the events of Season 1, twins Aqua and Ruby Hoshino continue their separate paths in the entertainment world - Aqua through acting and Ruby through being an idol - while secretly investigating the circumstances surrounding their mother's death. This season focuses on the 2.5 Dimensional Stage Play arc, where Aqua takes a lead role in a theatrical adaptation of a popular manga. Through this production, the series explores the craft of acting, the pressure of adapting beloved works, and the complex relationships between cast members. Ruby's idol group B-Komachi also gains prominence, showcasing the challenges and rewards of the idol industry. The season balances its dark mystery elements with insightful commentary on Japanese entertainment culture.",
    communityReview: {
      pros: [
        "Fascinating insight into theater and acting",
        "Strong character development for Aqua",
        "Mystery elements keep viewers engaged",
        "Excellent commentary on entertainment industry",
        "Beautiful animation and direction"
      ],
      cons: [
        "Slower pacing than Season 1",
        "Less focus on Ruby's storyline",
        "Stage play arc may not appeal to everyone",
        "Cliffhanger ending frustrates viewers"
      ]
    },
    genres: ["Drama", "Mystery", "Supernatural"],
    studio: "Doga Kobo",
    status: "Completed",
    views: "29.4M"
  },
  {
    id: 11,
    title: "Bleach: Thousand-Year Blood War Part 2",
    rating: 8.9,
    episodes: 13,
    season: "Summer 2023",
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop",
    shortSummary: "Ichigo and the Soul Reapers face their most powerful enemy yet in the Quincy invasion.",
    longSummary: "The second part of the Thousand-Year Blood War continues the epic battle between Soul Society and the Wandenreich. Yhwach and his elite Sternritter launch devastating attacks, pushing Soul Reapers to their limits. Ichigo discovers shocking truths about his heritage and powers while training with the Royal Guard in the Soul King Palace. The season delivers on long-awaited reveals about Squad Zero, showcases new Bankai transformations, and features incredibly choreographed battles enhanced by modern animation techniques. Studio Pierrot returns to the franchise with significantly improved animation quality, doing justice to Tite Kubo's final arc that was never animated until now. Long-time fans finally see iconic moments from the manga brought to life with stunning visuals and an epic soundtrack.",
    communityReview: {
      pros: [
        "Massive improvement over original series animation",
        "Finally adapts the manga's final arc properly",
        "Epic battles and spectacular Bankai reveals",
        "Faithful to source material with improvements",
        "Nostalgic return of beloved characters"
      ],
      cons: [
        "Fast pacing may confuse newcomers",
        "Some plot points remain convoluted",
        "CGI effects occasionally stand out",
        "Waiting between cours is frustrating"
      ]
    },
    genres: ["Action", "Supernatural", "Adventure"],
    studio: "Studio Pierrot",
    status: "Ongoing",
    views: "27.6M"
  },
  {
    id: 12,
    title: "Blue Lock Season 2",
    rating: 8.2,
    episodes: 14,
    season: "Fall 2024",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop",
    shortSummary: "Ego's radical program continues as strikers compete in the U-20 World Cup arc.",
    longSummary: "The second season of Blue Lock escalates the intensity as Yoichi Isagi and the remaining players face new challenges in their quest to become Japan's greatest striker. After surviving Blue Lock's rigorous first selection, the players must now compete against world-class U-20 players in international matches. Isagi continues to evolve his 'weapon,' learning to predict plays with increasing accuracy and developing new techniques. The season introduces powerful rival strikers from around the world, each with unique philosophies and playstyles. Ego Jinpachi's controversial training methods become more extreme, pushing the psychological and physical limits of the participants. The series maintains its intense psychological warfare and strategic soccer analysis while expanding its scope to a global stage.",
    communityReview: {
      pros: [
        "Intense psychological drama and strategy",
        "Character development through competition",
        "Unique take on sports anime genre",
        "Engaging rivalries and power dynamics",
        "Hype match moments"
      ],
      cons: [
        "Noticeable drop in animation quality",
        "Some matches lack fluid movement",
        "Can feel repetitive in structure",
        "Exaggerated abilities break realism"
      ]
    },
    genres: ["Sports", "Drama", "Action"],
    studio: "8bit",
    status: "Ongoing",
    views: "23.8M"
  }
];

export const topSeasonAnime = animeDatabase.slice(0, 10);
export const topRatedAnime = [...animeDatabase]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 8);
export const trendingAnime = [...animeDatabase]
  .sort((a, b) => parseFloat(b.views || "0") - parseFloat(a.views || "0"))
  .slice(0, 10);
