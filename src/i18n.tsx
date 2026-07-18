import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'РУС' | 'ENG' | 'ESP';

interface Dictionary {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Record<Language, Dictionary> = {
  'РУС': {
    hero: {
      tickets: 'Билеты',
      subtitle: 'Иммерсивное шоу дискретных процессов',
      cta: 'Поймать свой ритм'
    },
    acts: {
      act1_num: '1 - 60 Гц',
      act1_title: 'Высокие частоты',
      act1_desc: 'Пульсирующие процессы, создающие основу зрительного и слухового напряжения. Стробоскопическое световое шоу, обновляющееся доли секунды, и генеративный звуковой ландшафт с быстрыми микроритмами и глитч-эффектами.',
      act2_num: 'МИНУТЫ',
      act2_title: 'Средние частоты',
      act2_desc: 'Цикличные изменения, задающие основной структурный ритм всего шоу. Хореографические петли, где танцоры повторяют или незначительно меняют паттерн каждую минуту. Движение кинетических скульптур, раскрывающихся по математическому алгоритму.',
      act3_num: 'ЧАСЫ',
      act3_title: 'Низкие частоты',
      act3_desc: 'Медленные, медитативные трансформации. Незаметная, но методичная перестановка крупных объектов перформерами. Физические процессы: контролируемое таяние ледяных скульптур. Смещение температуры освещения от холодных к теплым тонам.'
    },
    timeline: {
      title: 'Ритмическая',
      titleHighlight: 'Партитура',
      subtitle: 'Наложение частот и циклов, создающее уникальные моменты резонанса.',
      step1_phase: 'ФАЗА 1',
      step1_title: 'ВХОД В РИТМ',
      step1_desc: 'Первые минуты в пространстве. Адаптация зрителя к пульсирующим процессам и визуальному напряжению высоких частот.',
      step2_phase: 'ФАЗА 2',
      step2_title: 'ОЛЬФАКТОРНЫЙ СДВИГ',
      step2_desc: 'Каждые 15 минут происходит смена ароматических композиций в зале, напрямую влияющая на подсознательное восприятие и перезапускающая цикл внимания.',
      step3_phase: 'ФАЗА 3',
      step3_title: 'ПИК СИНЕРГИИ',
      step3_desc: 'Наложение различных частот. Уникальные моменты резонанса, когда циклы высоких, средних и низких частот (секунды, минуты, часы) математически совпадают в одной точке.'
    },
    map: {
      title: 'Карта',
      titleHighlight: 'Пространства',
      subtitle: 'Исследуйте залы современного искусства и найдите хост-перформеров.',
      loc_title: 'Зал',
      loc1_title: 'Зал Высоких Частот',
      loc1_desc: 'Пространство стробоскопического света и генеративного звука. Место, где пульс учащается.',
      loc2_title: 'Зал Средних Частот',
      loc2_desc: 'Зона цикличных изменений. Хореографические петли и математически точные перестановки.',
      loc3_title: 'Зал Низких Частот',
      loc3_desc: 'Медитативное пространство медленных трансформаций. Тающие скульптуры и теплое освещение.',
      char_title: 'Перформер',
      char1_name: 'Метроном',
      char1_role: 'Хост Высоких Частот',
      char1_bio: 'Задает бешеный ритм первого зала. Его движения резки, отрывисты и синхронизированы с глитч-эффектами.',
      char2_name: 'Хранитель',
      char2_role: 'Хост Низких Частот',
      char2_bio: 'Отвечает за медленные процессы. Его присутствие едва уловимо, но именно он запускает таяние и сдвиги температуры.'
    },
    reviews: {
      title: 'Голоса',
      titleHighlight: 'Ритма',
      rev1_quote: 'Я никогда не испытывал ничего подобного. Я сам решал, на какой частоте фокусироваться. Это не шоу, это живой организм.',
      rev2_quote: 'Синхронизация звука и света на высоких частотах просто сносит крышу. А потом ты заходишь в зал тающего льда и время останавливается.',
      rev3_quote: 'Свобода перемещения и выбора своей частоты. Вы выходите оттуда другим человеком, с новым ощущением внутреннего пульса.'
    },
    tickets: {
      title: 'Настройся на',
      titleHighlight: 'Частоту',
      standard: 'СТАНДАРТ',
      standard_price: '₽2500',
      standard_desc: 'Полный доступ ко всем зонам шоу',
      vip: 'ПРЕМИУМ',
      vip_price: '₽5000',
      vip_desc: 'Доступ + закрытая зона медитации',
      buy: 'Приобрести',
      benefits: 'Преимущества'
    },
    footer: {
      org_label: 'Организатор',
      dates_label: 'Даты выставки',
      dates_val: 'СЕГОДНЯ — БЕСКОНЕЧНОСТЬ',
      cta: 'ПОЙМАЙ СВОЙ РИТМ'
    },
    philosophy: {
      title: 'Теория',
      titleHighlight: 'Ритмоанализа',
      quote_p1: 'Тот, кто собирается изучать ритмы, не может делать это в абстракции, как сторонний наблюдатель. Ритмоаналитик думает своим телом, не отрываясь от переживаемой темпоральности. Он слушает — и прежде всего свое тело; он учится у него ритму, чтобы затем оценивать внешние ритмы. Собственное тело служит ему метрономом.',
      quote_p2: 'Без сомнения, чтобы уловить ритм, нужно быть им захваченным, включенным в него. Но для того, чтобы его анализировать, от него необходимо дистанцироваться. Ритмоаналитик должен совмещать соучастие и отстраненность. Наблюдение за ритмом начинается изнутри, со своего "я", но требует взгляда со стороны. Его тело — это не просто инструмент, это первый объект наблюдения, через который он понимает все остальные структуры: город, толпу, природу.',
      author: 'Анри Лефевр',
      book: '«Ритмоанализ: Пространство, время и повседневность»'
    }
  },
  'ENG': {
    hero: {
      tickets: 'Tickets',
      subtitle: 'Immersive show of discrete processes',
      cta: 'Catch your rhythm'
    },
    acts: {
      act1_num: '1 - 60 Hz',
      act1_title: 'High Frequencies',
      act1_desc: 'Pulsating processes creating the foundation of visual and auditory tension. A stroboscopic light show refreshing in fractions of a second, and a generative soundscape with rapid micro-rhythms and glitch effects.',
      act2_num: 'MINUTES',
      act2_title: 'Mid Frequencies',
      act2_desc: 'Cyclic changes setting the main structural rhythm of the entire show. Choreographic loops where dancers repeat or slightly alter the pattern every minute. Movement of kinetic sculptures unfolding according to a mathematical algorithm.',
      act3_num: 'HOURS',
      act3_title: 'Low Frequencies',
      act3_desc: 'Slow, meditative transformations. Imperceptible but methodical rearrangement of large objects by performers. Physical processes: controlled melting of ice sculptures. Shift in lighting temperature from cold to warm tones.'
    },
    timeline: {
      title: 'Rhythmic',
      titleHighlight: 'Score',
      subtitle: 'Superposition of frequencies and cycles creating unique moments of resonance.',
      step1_phase: 'PHASE 1',
      step1_title: 'ENTER THE RHYTHM',
      step1_desc: 'First minutes in the space. Adaptation of the viewer to pulsating processes and the visual tension of high frequencies.',
      step2_phase: 'PHASE 2',
      step2_title: 'OLFACTORY SHIFT',
      step2_desc: 'Every 15 minutes, there is a change of aromatic compositions in the hall, directly affecting subconscious perception and resetting the attention cycle.',
      step3_phase: 'PHASE 3',
      step3_title: 'PEAK SYNERGY',
      step3_desc: 'Superposition of various frequencies. Unique moments of resonance when cycles of high, mid, and low frequencies (seconds, minutes, hours) mathematically coincide at one point.'
    },
    map: {
      title: 'Map of',
      titleHighlight: 'Space',
      subtitle: 'Explore the halls of contemporary art and find the host performers.',
      loc_title: 'Hall',
      loc1_title: 'High Frequency Hall',
      loc1_desc: 'Space of stroboscopic light and generative sound. A place where the pulse quickens.',
      loc2_title: 'Mid Frequency Hall',
      loc2_desc: 'Zone of cyclic changes. Choreographic loops and mathematically precise rearrangements.',
      loc3_title: 'Low Frequency Hall',
      loc3_desc: 'Meditative space of slow transformations. Melting sculptures and warm lighting.',
      char_title: 'Performer',
      char1_name: 'Metronome',
      char1_role: 'High Frequencies Host',
      char1_bio: 'Sets the frantic pace of the first hall. His movements are sharp, abrupt, and synchronized with glitch effects.',
      char2_name: 'Keeper',
      char2_role: 'Low Frequencies Host',
      char2_bio: 'Responsible for slow processes. His presence is barely perceptible, but it is he who triggers the melting and temperature shifts.'
    },
    reviews: {
      title: 'Voices of',
      titleHighlight: 'Rhythm',
      rev1_quote: 'I have never experienced anything like this. I decided for myself which frequency to focus on. It is not a show, it is a living organism.',
      rev2_quote: 'The synchronization of sound and light at high frequencies simply blows your mind. And then you enter the hall of melting ice and time stops.',
      rev3_quote: 'Freedom of movement and choice of your own frequency. You leave there a different person, with a new sense of internal pulse.'
    },
    tickets: {
      title: 'Tune into',
      titleHighlight: 'Frequency',
      standard: 'STANDARD',
      standard_price: '$25',
      standard_desc: 'Full access to all show zones',
      vip: 'PREMIUM',
      vip_price: '$50',
      vip_desc: 'Access + closed meditation zone',
      buy: 'Purchase',
      benefits: 'Benefits'
    },
    footer: {
      org_label: 'Organizer',
      dates_label: 'Exhibition Dates',
      dates_val: 'TODAY — INFINITY',
      cta: 'CATCH YOUR RHYTHM'
    },
    philosophy: {
      title: 'Theory of',
      titleHighlight: 'Rhythmanalysis',
      quote_p1: 'The rhythmanalyst will not be obliged to jump from the inside to the outside of observed bodies... He thinks with his body, not in the abstract, but in lived temporality. He listens – and first to his body; he learns rhythm from it, in order consequently to appreciate external rhythms. His body serves him as a metronome.',
      quote_p2: 'No doubt, in order to grasp a rhythm it is necessary to have been grasped by it; one must let oneself go, give oneself over, abandon oneself to its duration. But to analyse it, a certain distance is indispensable... The rhythmanalyst must combine complicity with distance. Observation of rhythms starts from within, from itself, but requires an external look. His body is not just an instrument, it is the first object of observation through which he understands the other structures: the city, the crowd, nature.',
      author: 'Henri Lefebvre',
      book: 'Rhythmanalysis: Space, Time and Everyday Life'
    }
  },
  'ESP': {
    hero: {
      tickets: 'Boletos',
      subtitle: 'Espectáculo inmersivo de procesos discretos',
      cta: 'Toma tu ritmo'
    },
    acts: {
      act1_num: '1 - 60 Hz',
      act1_title: 'Altas Frecuencias',
      act1_desc: 'Procesos pulsantes que crean la base de la tensión visual y auditiva. Un espectáculo de luces estroboscópicas que se actualiza en fracciones de segundo y un paisaje sonoro generativo con microrritmos rápidos y efectos de falla.',
      act2_num: 'MINUTOS',
      act2_title: 'Frecuencias Medias',
      act2_desc: 'Cambios cíclicos que marcan el ritmo estructural principal de todo el espectáculo. Bucles coreográficos donde los bailarines repiten o alteran levemente el patrón cada minuto. Movimiento de esculturas cinéticas que se despliegan según un algoritmo matemático.',
      act3_num: 'HORAS',
      act3_title: 'Bajas Frecuencias',
      act3_desc: 'Transformaciones lentas y meditativas. Reordenamiento imperceptible pero metódico de grandes objetos por parte de los artistas. Procesos físicos: derretimiento controlado de esculturas de hielo. Cambio en la temperatura de la iluminación de tonos fríos a cálidos.'
    },
    timeline: {
      title: 'Partitura',
      titleHighlight: 'Rítmica',
      subtitle: 'Superposición de frecuencias y ciclos que crean momentos únicos de resonancia.',
      step1_phase: 'FASE 1',
      step1_title: 'ENTRA EN EL RITMO',
      step1_desc: 'Primeros minutos en el espacio. Adaptación del espectador a los procesos pulsantes y la tensión visual de las altas frecuencias.',
      step2_phase: 'FASE 2',
      step2_title: 'CAMBIO OLFATIVO',
      step2_desc: 'Cada 15 minutos, hay un cambio de composiciones aromáticas en la sala, afectando directamente la percepción subconsciente y reiniciando el ciclo de atención.',
      step3_phase: 'FASE 3',
      step3_title: 'SINERGIA MÁXIMA',
      step3_desc: 'Superposición de varias frecuencias. Momentos únicos de resonancia cuando los ciclos de frecuencias altas, medias y bajas (segundos, minutos, horas) coinciden matemáticamente en un punto.'
    },
    map: {
      title: 'Mapa del',
      titleHighlight: 'Espacio',
      subtitle: 'Explora las salas de arte contemporáneo y encuentra a los artistas anfitriones.',
      loc_title: 'Sala',
      loc1_title: 'Sala de Altas Frecuencias',
      loc1_desc: 'Espacio de luz estroboscópica y sonido generativo. Un lugar donde el pulso se acelera.',
      loc2_title: 'Sala de Frecuencias Medias',
      loc2_desc: 'Zona de cambios cíclicos. Bucles coreográficos y reordenamientos matemáticamente precisos.',
      loc3_title: 'Sala de Bajas Frecuencias',
      loc3_desc: 'Espacio meditativo de transformaciones lentas. Esculturas derritiéndose e iluminación cálida.',
      char_title: 'Artista',
      char1_name: 'Metrónomo',
      char1_role: 'Anfitrión de Altas Frecuencias',
      char1_bio: 'Marca el ritmo frenético de la primera sala. Sus movimientos son bruscos, repentinos y sincronizados con efectos de falla.',
      char2_name: 'Guardián',
      char2_role: 'Anfitrión de Bajas Frecuencias',
      char2_bio: 'Responsable de los procesos lentos. Su presencia es apenas perceptible, pero es él quien desencadena el derretimiento y los cambios de temperatura.'
    },
    reviews: {
      title: 'Voces del',
      titleHighlight: 'Ritmo',
      rev1_quote: 'Nunca había experimentado algo así. Yo mismo decidí en qué frecuencia enfocarme. No es un espectáculo, es un organismo vivo.',
      rev2_quote: 'La sincronización de sonido y luz en altas frecuencias simplemente te vuela la cabeza. Y luego entras a la sala de hielo derritiéndose y el tiempo se detiene.',
      rev3_quote: 'Libertad de movimiento y elección de tu propia frecuencia. Sales de allí siendo una persona diferente, con un nuevo sentido del pulso interno.'
    },
    tickets: {
      title: 'Sintoniza la',
      titleHighlight: 'Frecuencia',
      standard: 'ESTÁNDAR',
      standard_price: '€25',
      standard_desc: 'Acceso completo a todas las zonas',
      vip: 'PREMIUM',
      vip_price: '€50',
      vip_desc: 'Acceso + zona de meditación cerrada',
      buy: 'Comprar',
      benefits: 'Beneficios'
    },
    footer: {
      org_label: 'Organizador',
      dates_label: 'Fechas de exposición',
      dates_val: 'HOY — INFINITO',
      cta: 'TOMA TU RITMO'
    },
    philosophy: {
      title: 'Teoría del',
      titleHighlight: 'Ritmoanálisis',
      quote_p1: 'Quien se propone estudiar los ritmos no puede hacerlo en la abstracción, como tercero... Él piensa con su cuerpo, no en abstracto, sino en temporalidad vivida. Él escucha, y primero a su cuerpo; aprende el ritmo de él, para en consecuencia apreciar los ritmos externos. Su cuerpo le sirve de metrónomo.',
      quote_p2: 'Sin duda, para captar un ritmo es necesario haber sido captado por él, volverse parte del mismo. Pero para analizarlo es necesario un cierto distanciamiento. El ritmoanalista debe combinar la complicidad con el distanciamiento. La observación de los ritmos parte del interior, de sí mismo, pero requiere una mirada externa. Su cuerpo no es sólo un instrumento, es el primer objeto de observación a través del cual comprende las demás estructuras: la ciudad, la multitud, la naturaleza.',
      author: 'Henri Lefebvre',
      book: 'El Ritmoanálisis: Espacio, Tiempo y Vida Cotidiana'
    }
  }
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (namespace: string, key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('РУС');

  const t = (namespace: string, key: string) => {
    return translations[lang][namespace]?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
