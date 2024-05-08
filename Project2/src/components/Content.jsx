import React from "react";

const Content = () => {
  return (
    <div className="w-[375px] ">
      {/* home>city */}
      <div>
        <p className="pl-4 text-[12px] text-[#b9b9b9]">
          Homes {`>`} Cities {`>`} <span className="text-gray-800">Rome</span>{" "}
        </p>
      </div>
      {/* button */}
      <div className="flex justify-center gap-x-5 ml-3 mt-2">
        <button className="border rounded-2xl w-[97.18px] h-[28.7px] text-[11px] pl-2 pr-2 bg-[#073A4D] text-white ">
          At a Glance
        </button>
        <button className="border rounded-2xl text-[11px] pl-1 pr-1 text-[#898989] w-[104.26px] h-[28.7px]">
          Transportation
        </button>
        <button className="border rounded-2xl text-[11px] pl-1 pr-1 text-[#898989] w-[117.44px] h-[28.7px]">
          Airport Transfer
        </button>
      </div>
      <div>
        <p className="pl-4 pt-4 w-[340.11px] font-[400] text-[14px] text-[#484848]">
          Nestled in the heart of Italian Peninsula, Rome is the capital of the
          country and one of the most populated cities in Italy. From its rich
          architecture to rare artefacts, this city is known to possess a
          history like none other. The picturesque atmosphere, the cold wind
          blowing and the serene atmosphere is what makes Rome a must visit
          place for all the travel fanatics out there.
        </p>
        <img
          className="w-[100vw] h-[188.78px] pl-4 pt-4"
          src="https://s3-alpha-sig.figma.com/img/2115/b86e/3efe6d363ff066e5575e734b9aedfbe9?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CswsufeqrI6ZDRKE9dNVENgk-0ZcBFm7hErcd62RjFRwQlt2fZKVpFvVQcqmvqyI9UZuzxG~tyh5Ud3LBGT0PUwKCRcfTS1QpZewrd~KWptZXtuCkt7~memBVJ1UK5~nTr1PBMiGSK8WG6xMCTv81KT3p-4xM0Z1-fbz7AMdusi6aD3HMiKqRZBBHg8iAioR9XS5hJe5aNAEP98hj1Fep8F4ZjtphM62i5qaeXFMRj8DE~9WHoKFWMCXT6qorsqrZNqb0GILC314Lg4YsvSQZM9FNT3ZT5IZjqxTlY5YBDcRoJLWtxM~zG9Sj6r1ULCEpjb2w2WyLfYw7X9hMbmJbw__"
          alt=""
        />
        <p className="pl-4 text-[14px]">
          Rome Civitavecchia, Italy <br />
          <span className="text-[10px]">Image by xyz via Flickr</span>{" "}
        </p>
      </div>
      <div>
        <p className="pl-4 pt-4 w-[340.11px]  font-[400] text-[14px] text-[#484848]">
          The Roman Empire has been an icon when it comes to historical
          importance. The Roman Empire had cut the ribbons when Augustus Caesar
          announced to be the first emperor of Rome in 31BC and ended with the
          fall of Constantinople in 1453CE. Known to be the centre of the Roman
          Empire, Rome attracts the majority of the crowd due to its rich
          history and politics.
        </p>
        <p className="pl-4 pt-4 w-[340.11px] font-[400] text-[14px] text-[#484848] ">
          Referred to as ‘An Eternal City’ in the beginning of the history, Rome
          is seen to be a dream for music lovers due to the Parco Della Musica
          which is known to be one of the largest music venues in the world. Not
          only music, Rome has also set itself in the most wanted places to
          visit in the world and is the third most visited places in the entire
          Europe. This place has experienced arts from different periods and
          became a home for some of the most renowned artists such as Borromini,
          Bernini, Carracci and Cortona.
        </p>
        <img
          className="pl-4 w-[100vw] h-[227.08px] mt-4"
          src="https://s3-alpha-sig.figma.com/img/403d/8f7c/452581e4f345adb429a4ee37960c3030?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llAauNt66tHQ4NAmfqpnM3yBQQBn-juW~VXAVVwG0dTel4aKteCx4RkB~QvjKDnMh4Z1YFQtcHyrrGbgmiqOFeAOx7IcF7sjB~cG2D56vFSo1g3kD7Mg7jQlN18fZKfOM9HcsruAbYJxdg07hBfzZOTedGDcROuycyFvhyTEjgGtnSg9e4MlZAPue9DOMcXdWnaDlh9C5vmh1bE6ZPlflBC8iN19Lf6-lFloHAD-V1CdQx7ZaxZdN7X3DtCx1VMT-tKQ2jd8xFIVq8KtCJsit11vvH83~Exo8d1bVix78WAoUDq4Db4aXUAMYcf5WRfEOERjBRmiXqu4IMljgQN83A__"
          alt=""
        />
        <p className="pl-4 text-[14px]">
          Rome Civitavecchia, Italy <br />
          <span className="text-[10px]">Image by xyz via Flickr</span>{" "}
        </p>
        <p className="pl-4 pt-4 w-[340.11px] font-[400] text-[14px] text-[#484848] ">
          Embracing the ancient art, Rome has now decided to use its innovation
          to give birth to contemporary art to keep enhancing their love for art
          and architecture, National Museum of the 21st Century Arts is a live
          example of that. The Italian cuisine has somehow managed to be a king
          of all cuisines, from the Carciofi alla romana to the Spaghetti alla
          carbonara- Delicious spaghetti topped with bacon, smokey eggs and
          pecorino is what makes it mouth watering. <br /> <br /> 
          Rome has a series of reasons
          to attract you and slip you into its warm arms to rejuvenate your soul
          with its authentic art, awe-inspiring architecture and mouth-watering
          food.
        </p>
      </div>
    </div>
  );
};

export default Content;
