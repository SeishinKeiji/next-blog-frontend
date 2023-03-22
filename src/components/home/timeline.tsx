import React from "react";
import { Box, chakra, Container, Text, HStack, VStack, Flex, useColorModeValue, useBreakpointValue, Heading } from "@chakra-ui/react";

const milestones = [
  {
    id: -1,
    date: "Currently - Now",
    title: "Keep learning and Be a longlife learner",
    description: "saya akan menikmati proses dan usaha ini untuk mencapai tujuan utama saya yaitu menjadi manusia yang bermanfaat and keep learning, enjoy code! :)",
  },
  {
    id: 0,
    date: "March 22, 2023",
    title: "Interest in Game Development",
    description:
      "Saat saya mempelajari matematika, saya mulai berpikir bahwa mungkin keindahan dan ke-estetikan matematika dapat saya temukan di penerapan dalam membuat sebuah game, tapi ide ini masih saya pertimbangkan mengingat banyak hal yang perlu saya prioritaskan untuk saya kuasai terlebih dahulu.",
  },
  {
    id: 1,
    date: "March 22, 2023",
    title: "Interest Sysbuilder/Sysadmin",
    description:
      "Ketertarikan saya pada Sysadmin ini muncul karena beberapa faktor, salah satunya adalah karena migrasi saya dari vscode ke nvim, di merasa tertantang untuk menguasai berbagai command linux seperti maintain package, ricing desktop linux, dan masih banyak lagi. Saya juga mulai terbiasa membaca dokumentasi karena migrasi ke nvim membuat saya perlu lebih giat lagi untuk meluangkan waktu membaca dokumentasinya, dan faktor lainnya adalah setup github. Ya! setup github di linux tanpa vscode membuat saya tertarik pada hal-hal sederhana seperti setting gpg untuk verify signature dan ssh untuk push/pull repository. selain itu, karena saya bermain dengan whatsapp bot yang menyimpan sesi di database postgresql. Saya mulai penasaran dengan bagaimana filesystem bekerja, tetapi saya masih belum berkesempatan untuk mengeksplorenya lebih jauh.",
  },
  {
    id: 2,
    date: "March 22, 2023",
    title: "Interest in Networking",
    description:
      "Terkadang Saya mempelajari hal lain pada saat saya mempelajari GraphQL sebagai pelarian saya ketika stuck saat mendalami GraphQL, untuk saat ini saya tertarik pada jaringan khususnya pada layer application yaitu protocol http, karena dulu saya bermain dengan whatsapp bot dan membuat rest api yang di consume bot tersebut, service yang disediakan hanyalah tools image and video downloader yang saya dapatkan dari hasil scraping, dan juga masih ada service lainnya. dari situ saya mendapatkan banyak wawasan hal baru seperti websocket, kriptografi, dan konsep-konsep lainnya yang saling mendukung dan melengkapi. maka dari itu saya jadi tertarik untuk merewrite project tersebut ke golang.",
  },
  {
    id: 3,
    date: "March 22, 2023",
    title: "Learn and explore GraphQL",
    description:
      "Saya mulai tertarik dengan abstraksi yang dilakukan oleh GraphQL dan pada saat itu pula saya sedang mempelajari golang. Jadi tanpa pikir panjang saya langsung terjun menyelami konsep-konsep yang membangun GraphQL dimulai dari parsing teks, tetapi saya menyadari bahwa ternyata ilmu saya masih kurang untuk mendalami bagian itu, maka saya mempelajari hal yang lebih dasar lagi yang dapat mendukung saya untuk memahami konsep tersebut seperti teori himpunan pada matematika, fundamental bahasa go seperti sifat-sifatnya dan masih banyak lagi. Dan karena resource pembelajaran berbasis bahasa indonesia masih belum banyak saya pun memutuskan untuk mempelajari dan mendalami bahasa inggris terlebih dahulu.",
  },
  {
    id: 4,
    date: "March 22, 2023",
    title: "Learn and explore GoLang",
    description:
      "Saya mulai teracuni oleh channel mas didiet yang selalu menampilkan konten low-levelnya yang membuat saya penasaran untuk mencoba bagian itu, alhasil saya memutuskan untuk berhenti menjadi fullstack javascript developer menjadi golang developer, walaupun saya masih menggunakan javascript untuk bermain dengan browser dan dunia web dev.",
  },
  {
    id: 5,
    date: "August 28, 2020 - February 28, 2023",
    title: "Interest in Programming and Be a script kiddie",
    description:
      "Saya mulai tertarik pada programming pada saat saya smp kelas 3 saat itu sedang covid, dan hal yang sampai saat ini masih membuat saya ingin tertawa adalah faktor yang membuat saya tertarik adalah karena melihat kakak saya yang saat itu sedang mengoding dan menantang saya untuk menulis hello world di website menggunakan php. di situlah saya merasa tertantang dan setelah menulis hello world saya mendalami bahasa pemrograman tersebut, dan terimakasih kepada pa sandhika yang telah menemani dan membimbing saya membangun website dengan php dan berbagai frameworknya. lalu setelah beberapa bulan menggunakan php saya bertemu seorang teman baru yang meracuni saya untuk berpindah ke fullstack javascript, beliau adalah mas arya. yang juga meracuni saya untuk berpindah dari windows ke limnux :v\ndan sampai tanggal ini saya masih menjadi fullstack javascript developer walaupun masih sangat jauh dari kriteria fullstack tetapi saya tetap menyebutnya fullstack :v",
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <Heading fontSize={"3xl"} fontWeight={"medium"} textAlign="center" p={5}>
        Milestones
      </Heading>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue("#edf2f6", "#1a202c")} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr={{ base: "40px", md: "40px" }} ml={{ base: "0", md: "40px" }}>
      <chakra.span position="absolute" left="50%" height="calc(100% + 10px)" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.700")} top="0px"></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;
