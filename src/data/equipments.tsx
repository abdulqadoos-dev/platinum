import type { ReactNode } from "react";

export type EquipmentCard = {
  title: string;
  image: string;
  slug: string;
  detailImage?: string;
  detailContent: ReactNode;
};

export const equipmentCards: EquipmentCard[] = [
  {
    title: "Float Truck",
    image: "/equipments/Float-Truck.jpg",
    slug: "float-truck",
    detailImage: "/equipments/Float-Truck.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>Float trailers are specialized transport vehicles designed to carry equipment, machinery, and other heavy loads that exceed the dimensions of standard enclosed trailers. Their low-profile design and flat deck make it easy to load and unload oversized items, providing versatility for a wide range of hauling needs. Float trailers typically feature ramps or hydraulic systems for seamless loading, ensuring that even the heaviest machinery can be transported safely and efficiently. Commonly used in construction, agriculture, and industrial applications, these trailers are essential for moving bulky equipment, facilitating operations while adhering to safety regulations. Their robust construction and capacity to accommodate a variety of loads make float trailers a vital asset for businesses that require reliable transportation solutions.</p>
      </div>
    ),
  },
  {
    title: "Rail Heater",
    image: "/equipments/Rail-Heater.jpg",
    slug: "rail-heater",
    detailImage: "/equipments/Rail-Heater.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>The Rail Heater Unit from HMA Materials Handling is a crucial tool for maintaining the integrity of railway tracks that have been in use for extended periods. As tracks are exposed to fluctuating temperatures, they can experience stress due to thermal expansion and contraction. This stress can compromise the stability and safety of the rail infrastructure. The Rail Heater Unit is designed to effectively stress and destress sections of track, helping to alleviate tension and prevent potential damage. By applying controlled heat, the unit allows for adjustments in rail alignment, ensuring that the tracks remain safe and operational, even in extreme weather conditions. This proactive maintenance solution is essential for enhancing the longevity and reliability of rail systems.</p>
      </div>
    ),
  },
  {
    title: "Jr Tamper",
    image: "/equipments/jr-tamper.jpg",
    slug: "jr-tamper",
    detailImage: "/equipments/jr-tamper.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>The tamper alarm function is an advanced security feature designed to protect devices from unauthorized removal. It operates by continuously monitoring the device's gravity value, which serves as a baseline for its position. If any change is detected - indicating potential tampering - the alarm is triggered, alerting the user with an audible warning and automatically making calls to a designated location for immediate response. This proactive security measure ensures that any unauthorized attempts to remove the device are promptly addressed, enhancing overall safety and reducing the risk of equipment theft or vandalism. By providing real-time alerts, the tamper alarm function plays a crucial role in safeguarding valuable assets.</p>
      </div>
    ),
  },
  {
    title: "Railavator",
    image: "/equipments/Railavator.jpg",
    slug: "railavator",
    detailImage: "/equipments/Railavator.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>RCE's Railavator line-up offers an innovative solution for a variety of railroad maintenance tasks, enhancing productivity across multiple applications. Whether you need to pull rail, cut brush, crane items, undercut, or perform digging and trenching, the Railavator is designed to tackle these challenges efficiently. Its versatile features and robust construction enable operators to easily switch between tasks, making it an invaluable tool for railway crews. By streamlining operations and improving efficiency, the Railavator empowers maintenance teams to complete projects more effectively, ensuring that rail infrastructure remains safe and operational. With its commitment to high productivity, the Railavator line-up stands out as a reliable choice for modern railroad maintenance needs.</p>
      </div>
    ),
  },
  {
    title: "Mark IV",
    image: "/equipments/Mark-IV.jpg",
    slug: "mark-iv",
    detailImage: "/equipments/Mark-IV.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>The Mark IV Production/Switch Tamper is a robust piece of equipment designed for efficient track maintenance in the rail industry. Its durable construction features rugged vibrator assemblies that ensure effective tamping of track ballast, enhancing stability and alignment. The Mark IV also boasts an easily upgradeable control system, allowing for adaptability to meet evolving technological needs. Harsco Rail tampers are tailored to meet local standards, ensuring compliance with specific regional requirements. This combination of durability, efficiency, and customization makes the Mark IV an invaluable asset for railway operators, providing long-lasting performance and exceptional value in maintaining safe and reliable tracks.</p>
      </div>
    ),
  },
  {
    title: "Spike Puller",
    image: "/equipments/Spike-Puller.jpg",
    slug: "spike-puller",
    detailImage: "/equipments/Spike-Puller.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A spike puller is a vital piece of railroad maintenance of way machinery specifically designed to remove rail spikes from ties. By automating the spike removal process, these machines significantly increase efficiency, allowing for faster operation than manual methods. The spike puller uses specialized mechanisms to grip and extract spikes with precision, reducing labor time and minimizing the risk of injury associated with manual removal. This capability is crucial during track repairs or upgrades, as it streamlines the maintenance process and helps ensure that rail infrastructure is kept in optimal condition. As a result, spike pullers are indispensable tools for railway maintenance crews worldwide.</p>
      </div>
    ),
  },
  {
    title: "Spiker",
    image: "/equipments/spiker.jpg",
    slug: "spiker",
    detailImage: "/equipments/spiker.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A spike driver, commonly referred to as a spiker, is an essential piece of maintenance of way equipment used in rail transport. Its primary function is to drive rail spikes into the ties, securing the rails in place to ensure stability and safety. Available in various sizes, spike drivers are designed to meet the specific needs of different rail systems and environments. These machines enhance efficiency by automating the spike installation process, allowing for faster track maintenance and installation. With their robust construction and reliability, spike drivers are widely utilized in railway operations around the world, playing a crucial role in maintaining the integrity of rail infrastructure.</p>
      </div>
    ),
  },
  {
    title: "Hi Rail Roto Dump",
    image: "/equipments/Roto-Dump.jpg",
    slug: "hi-rail-roto-dump",
    detailImage: "/equipments/Roto-Dump.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>The popular hi-rail rotary dump truck features a 180-degree turnable dump bed, making it exceptionally versatile for railroad maintenance projects. Equipped with specialized railgear, this truck can seamlessly transition from road to rail, allowing it to transport heavy loads of ballast and various materials - including sand, medium aggregates, riprap, and asphalt - directly to job sites along the rail line. This capability not only enhances efficiency but also enables quick access to remote locations, ensuring that essential materials are delivered precisely where they are needed, whether for repairs, upgrades, or construction. Its design combines the robust functionality required for railway work with the convenience of a traditional dump truck, making it a valuable asset for any rail maintenance crew.</p>
      </div>
    ),
  },
  {
    title: "Hi Rail Excavator",
    image: "/equipments/Excavator.jpg",
    slug: "hi-rail-excavator",
    detailImage: "/equipments/Excavator.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>Hi-rail excavators are specialized machines designed for railway maintenance, capable of removing and reinstalling tracks and sleepers efficiently. Equipped with a variety of purpose-built attachments, these versatile excavators can tackle various tasks, such as lifting, transporting, and positioning rails and ties. Their unique railgear allows them to operate on both roads and tracks, providing flexibility and accessibility to job sites. This adaptability makes hi-rail excavators essential for maintaining rail infrastructure, ensuring safe and reliable train operations. By streamlining the process of track and sleeper installation, they enhance productivity and reduce the time required for maintenance projects.</p>
      </div>
    ),
  },
  {
    title: "Tie Crane",
    image: "/equipments/Tie-Crane.jpg",
    slug: "tie-crane",
    detailImage: "/equipments/Tie-Crane.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A tie crane, or tie handler, is an essential piece of maintenance of way equipment in rail transport, designed to efficiently move and handle railroad ties, also known as sleepers. These machines play a crucial role in track relaying operations, automating the process that was once performed manually. By utilizing advanced lifting and positioning mechanisms, tie cranes significantly reduce the physical labor involved in handling heavy ties, enhancing both safety and productivity on job sites. Their ability to maneuver in tight spaces along the tracks allows for precise placement and removal of ties, ensuring the integrity and reliability of rail infrastructure while streamlining maintenance tasks.</p>
      </div>
    ),
  },
  {
    title: "Tie Inserter",
    image: "/equipments/Tie-Inserter.jpg",
    slug: "tie-inserter",
    detailImage: "/equipments/Tie-Inserter.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A tie exchanger, often referred to as a TKO (Tie Knock Out), is a specialized self-propelled vehicle used in railroad maintenance of way operations. This innovative machine efficiently removes old railroad ties, or sleepers, from the tracks and replaces them with new ones. By automating this crucial process, the tie exchanger enhances the speed and efficiency of maintenance work, reducing downtime for trains and improving overall track safety. Its design allows for seamless extraction and insertion, making it an invaluable tool for railway companies aiming to maintain and upgrade their infrastructure effectively.</p>
      </div>
    ),
  },
  {
    title: "Speedswing",
    image: "/equipments/speed-swing-application.jpg",
    slug: "speedswing",
    detailImage: "/equipments/speed-swing-scaled-e1730157187633.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A speedswing is a specialized rail maintenance machine designed for efficient and precise handling of track materials. It features a powerful crane with a rotating boom and hydraulic controls, allowing it to lift, swing, and place heavy materials like rails and ties with high accuracy. This equipment is essential for tasks such as track laying, replacement, and repairs. Its ability to work quickly and adapt to different track conditions makes it invaluable for maintaining and upgrading rail infrastructure. Platinum Track uses speedswings to enhance productivity and ensure high-quality results in rail construction and maintenance projects.</p>
      </div>
    ),
  },
  {
    title: "Hirail Truck",
    image: "/equipments/Project_20221128_0005.jpeg",
    slug: "hirail-truck",
    detailImage: "/equipments/HiRail-Grapple-2-1024x576.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A hirail truck is a specialized vehicle designed for dual functionality on both highways and rail tracks. It features rail wheels that can be deployed or retracted, allowing the truck to transition seamlessly between road and rail travel. This versatility makes it ideal for railway maintenance and construction tasks, such as transporting materials and equipment to job sites. Equipped with standard truck features and rail-specific adaptations, hirail trucks enhance operational efficiency by providing access to remote track locations and facilitating easy material movement. Platinum Track utilizes hirail trucks to ensure effective and flexible support for various rail projects.</p>
      </div>
    ),
  },
  {
    title: "Hirail Grapple Truck",
    image: "/equipments/HiRail-Grapple-2.jpg",
    slug: "hirail-grapple-truck",
    detailImage: "/equipments/HiRail-Grapple-2.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A hirail grapple truck is a versatile vehicle designed for rail maintenance and construction tasks. It combines the capabilities of a standard truck with rail-specific features, allowing it to travel on both roads and rail tracks. Equipped with a hydraulic grapple arm, the truck can efficiently handle and transport heavy materials such as rails, ties, and debris. This equipment is essential for tasks like track repair, material loading, and site cleanup. Platinum Track uses hirail grapple trucks to enhance productivity and streamline operations, ensuring efficient and safe handling of railway materials in various environments.</p>
      </div>
    ),
  },
  {
    title: "Ballast Regulator",
    image: "/equipments/grader-scaled.jpg",
    slug: "ballast-regulator",
    detailImage: "/equipments/Stabalizer-3.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A ballast regulator is essential for maintaining proper track stability and alignment. It grades and shapes the track ballast, which is the crushed stone that supports and stabilizes railroad ties. By distributing and levelling the ballast, the regulator ensures that the track bed remains evenly supported, preventing uneven wear and maintaining track alignment. This equipment is crucial for adjusting the track's elevation and camber, improving the overall safety and performance of rail operations. Platinum Track utilizes advanced ballast regulators to keep your tracks in optimal condition, enhancing both operational efficiency and safety.</p>
      </div>
    ),
  },
  {
    title: "Track Stabalizer",
    image: "/equipments/Stabilizer-2.jpg",
    slug: "track-stabalizer",
    detailImage: "/equipments/Stabalizer-3.jpg",
    detailContent: (
      <div className="space-y-4 text-base text-secondary">
        <p>A railway track stabilizer is an essential machine designed to maintain the geometry of railway tracks. The dynamic track stabilizer operates by using horizontal oscillations and vertical load to effectively rearrange ballast stones, lowering the track into the ballast bed. This process enhances the stability of the track, increases resistance to lateral displacement, and extends the intervals between maintenance. The benefits of using a railway track stabilizer include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cost Efficiency: Reduced maintenance costs due to less frequent repairs and interventions.</li>
          <li>Extended Maintenance Intervals: Longer periods between maintenance activities, allowing for more efficient scheduling and resource allocation.</li>
          <li>Improved Track Geometry: Achieving a more geometrically accurate track structure, which enhances safety and ride quality for trains.</li>
        </ul>
      </div>
    ),
  },
];
