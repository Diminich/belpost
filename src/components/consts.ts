import svgAdminIcon from "./../svg/png-clipart-computer-icons-shopping-list-others-angle-text 1 (Traced).svg";
import svgRucovodstvoIcon from "./../svg/Vector.svg";
import svgPriemIcon from "./../svg/receptionSchedule.svg";
import svgStructureIcon from "./../svg/Structure.svg";

import svgSecondaryPageIcon from "./../svg/secondaryPageIcon.svg";

import svgIconBack from "./../svg/down.svg";
import svgHomePage from "./../svg/Home.svg";

import svgSliderIcon1 from "./../svg/images 1.jpg";
import svgSliderIcon2 from "./../svg/images 2.jpg";

interface HomePageType {
  id: string;
  name: string;
  url: string;
  icon: string;
}

interface SecondaryPageType {
  id: string;
  currentNamePage: string;
  currentUrl: string;
  secondaryPageNameButton: string;
  secondaryPageUrlButton: string;
  secondaryPageIconButton: string;
}

interface PageType {
  id: string;
  currentUrl: string;
  pageName: string;
  pagetext: string;
  svgIconBack: string;
  svgHomePage: string;
}

export const homePage: HomePageType[] = [
  {
    id: "1",
    name: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ",
    url: "/belpost/administrativeProcedures",
    icon: svgAdminIcon,
  },
  {
    id: "2",
    name: "РУКОВОДСТВО",
    url: "/belpost/management",
    icon: svgRucovodstvoIcon,
  },
  { id: "3", name: "ГРАФИК ПРИЕМА", url: "/belpost", icon: svgPriemIcon },
  { id: "4", name: "СТРУКТУРА", url: "/belpost", icon: svgStructureIcon },
];

export const secondaryPage: SecondaryPageType[] = [
  {
    id: "1",
    currentNamePage: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ",
    currentUrl: "/belpost/administrativeProcedures",
    secondaryPageNameButton: "Страница 1",
    secondaryPageUrlButton: "/belpost/administrativeProcedures/page1",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "2",
    currentNamePage: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ",
    currentUrl: "/belpost/administrativeProcedures",
    secondaryPageNameButton: "Страница 2",
    secondaryPageUrlButton: "/belpost/administrativeProcedures/page2",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "3",
    currentNamePage: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ",
    currentUrl: "/belpost/administrativeProcedures",
    secondaryPageNameButton: "Страница 3",
    secondaryPageUrlButton: "/belpost",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "4",
    currentNamePage: "АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ",
    currentUrl: "/belpost/administrativeProcedures",
    secondaryPageNameButton: "Страница 4",
    secondaryPageUrlButton: "/belpost",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "5",
    currentNamePage: "РУКОВОДСТВО",
    currentUrl: "/belpost/management",
    secondaryPageNameButton: "Директор",
    secondaryPageUrlButton: "/belpost/management/page1",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "6",
    currentNamePage: "РУКОВОДСТВО",
    currentUrl: "/belpost/management",
    secondaryPageNameButton: "Зам директор",
    secondaryPageUrlButton: "/belpost/management/page2",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "7",
    currentNamePage: "РУКОВОДСТВО",
    currentUrl: "/belpost/management",
    secondaryPageNameButton: "Менеджер",
    secondaryPageUrlButton: "/Belpost",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
  {
    id: "8",
    currentNamePage: "РУКОВОДСТВО",
    currentUrl: "/belpost/management",
    secondaryPageNameButton: "Глава Отдела кадров",
    secondaryPageUrlButton: "/belpost",
    secondaryPageIconButton: svgSecondaryPageIcon,
  },
];

export const page: PageType[] = [
  {
    id: "1",
    currentUrl: "/belpost/administrativeProcedures/page1",
    pageName: "Страница 1",
    pagetext:
      "Учитывая ключевые сценарии поведения, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации вывода текущих активов. Но тщательные исследования конкурентов могут быть разоблачены. Современные технологии достигли такого уровня, что граница обучения кадров позволяет оценить значение новых предложений. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: выбранный нами инновационный путь влечет за собой процесс внедрения и модернизации форм воздействия. Есть над чем задуматься: непосредственные участники технического прогресса и по сей день остаются уделом либералов, которые жаждут быть разоблачены. Значимость этих проблем настолько очевидна, что базовый вектор развития однозначно фиксирует необходимость кластеризации усилий. В своём стремлении повысить качество жизни, они забывают, что убеждённость некоторых оппонентов, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для укрепления моральных ценностей. Не следует, однако, забывать, что базовый вектор развития является качественно новой ступенью существующих финансовых и административных условий. Вот вам яркий пример современных тенденций - сложившаяся структура организации предопределяет высокую востребованность инновационных методов управления процессами. Господа, перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса существующих финансовых и административных условий. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Следует отметить, что выбранный нами инновационный путь создаёт предпосылки для инновационных методов управления процессами.",
    svgIconBack: svgIconBack,
    svgHomePage: svgHomePage,
  },
  {
    id: "2",
    currentUrl: "/belpost/administrativeProcedures/page2",
    pageName: "Страница 2",
    pagetext:
      "Основой достижения определенного результата деятельности отдельного работника, группы или организации в целом является выполняемая сотрудником работа, т.е. трудовая деятельность, которая имеет как содержательную сторону, отвечая на вопрос: «что следует делать?», так и процессуальную, технологическую сторону осуществления деятельности, давая ответ на вопросы: «как делать?» и «кому следует делать?». Все это в совокупности позволяет выделить и описать тот или иной участок работы, который в данном контексте можно назвать рабочим местом (должностью). Должность является основным структурным элементом организации и характеризуется полномочиями (т.е. обязанностями и правами) и ответственностью. Определение основных характеристик работы (или рабочего места) и требований к работнику осуществляется в ходе анализа работы и ее описания. Существует несколько определений термина «анализ работы». Согласно исследованиям Британского института стандартизации анализ работы — это определение наиболее существенных характеристик работы. Американский департамент труда расширил это определение. Согласно его трактовке анализ работы определяется как «любой процесс упорядочения и оценки информации», связанной с работой или работником. Информация может отражать содержание работы, выраженное в терминах конкретных рабочих функций и процедур, или она может состоять из характеристик работника (практических навыков, знаний, способностей, допустимых отклонений и т.д.), требуемых для компетентного выполнения работы. Анализ работы — это процесс систематического исследования работы по определению наиболее существенных ее характеристик, а также требований к исполнителям данной работы.",
    svgIconBack: svgIconBack,
    svgHomePage: svgHomePage,
  },
  {
    id: "3",
    currentUrl: "/belpost/management/page1",
    pageName: "Директор",
    pagetext:
      "Ключевым для меня понятием в связи с моей работой остается понятие лидерства. Директор школы - это лидер педагогического коллектива, лидер в инновационном развитии образовательной организации. Он тот, кто знает, куда идет сам, он тот, за кем в том же направлении готовы идти его коллеги. Для того чтобы это было именно так, руководитель должен стать тем, кого можно назвать так: директор - образовательный политик. То есть именно он отвечает за реализацию прежде всего государственной образовательной политики. Одна из моих дискуссий с некоторыми моими коллегами, если несколько ее упростить, сводится к вопросу, который они мне часто задают: «А какой должна быть школа Новокрещенова?» Я всегда отвечаю, что я со своими коллегами строю не школу Новокрещенова, а большую московскую школу. Потому что большинство авторских школ (при огромном уважении к их авторам) разваливается после ухода основателей - безусловно, авторитетных лидеров. Мне и моим коллегам важно, чтобы в результате наших трудов возникла самая современная школа, которая будет динамично развиваться, предоставляя максимальному количеству москвичей качественное образование, чтобы в нее были заложены правильные механизмы развития и надежная система управления. Отсюда следует следующая важная роль руководителя московской школы: директор - сильный управленец.",
    svgIconBack: svgIconBack,
    svgHomePage: svgHomePage,
  },
  {
    id: "4",
    currentUrl: "/belpost/management/page2",
    pageName: "Зам директора",
    pagetext:
      "Заместитель руководителя — должность в организации или её структурном подразделении. Лицу, занимающему должность заместителя, руководитель организации (или её владелец) делегирует некоторые полномочия руководителя организации или подразделения Название должности в штатном расписании зависит от функции заместителя и устава организации. Например, финансовый директор (заместитель директора по финансам), заместитель директора по управлению персоналом, заместитель начальника цеха по производственным вопросам. К заместителям руководителя структурных подразделений трудовое законодательство обычно не предъявляет специальных требований (так, Трудовой кодекс РФ предусматривает лишь возможность привлечения к дисциплинарной ответственности по требованию профсоюза (статья 195). Однако, особенности работы заместителей руководителей организации (в частности, заместитель может быть вынужден исполнять обязанности руководителя в отсутствие последнего и тем самым подлежит тем же ограничениям, что и сам руководитель) приводят к законодательным ограничениям на трудоустройство. Так, в РФ заместитель не должен входить в реестр дисквалифицированных лиц.",
    svgIconBack: svgIconBack,
    svgHomePage: svgHomePage,
  },
];

export const sliderSvgIcon: string[] = [svgSliderIcon1, svgSliderIcon2]