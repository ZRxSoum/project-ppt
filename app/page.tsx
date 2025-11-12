import Image from "next/image";
import AdoptionChart from "./chartAdp";
import Experience from "./canvas";

function Home() {
  return (
    <div className="w-screen h-screen bg-neutral-800 overflow-x-hidden">
      {
        // intro
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex text-yellow-100">
        <Image
          className="h-full w-5/11 rounded-2xl"
          src="/Images/Intro_image.png"
          width={760}
          height={1080}
          alt="intro"
        />
        <div className="h-full w-6/11 flex flex-col justify-center p-12">
          <p className="text-4xl font-bold p-4">
            Axle Counters in Indian Railways
          </p>
          <p className="text-xl p-4 italic">
            A Real-World Application of Analog & Digital Communications
          </p>
          <p className="p-4">
            From analog sensor to digital safety signal4how railways prevent
            collisions through integrated communications technology.
          </p>
          <div className="p-4 italic">
            <div>• 2023ETB015 - Soumit Sardar</div>
            <div>• 2023ETB016 - Soumajit Mandal</div>
            <div>• 2023ETB017 - Ravi Shankar Thakur</div>
            <div>• 2023ETB018 - Srinjoy Adhikary</div>
            <div>• 2023ETB019 - Rajdeep Koley</div>
            <div>• 2023ETB020 - Sagnik Ganguly</div>
          </div>
        </div>
      </main>
      {
        // evl
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-center flex flex-col justify-center-safe text-yellow-100">
        <div className="text-3xl p-4 font-bold">
          Evolution of Train Detection Circuits
        </div>
        <div className="text-lg p-4">
          For over a century, the fundamental safety component of railway
          signalling has been the track circuit. Its importance cannot be
          overstated, as it provides the primary "train detection" logic for
          most of the world's railways. The track circuit's principle is to pass
          a low-voltage electrical current through the rails themselves. When a
          train's metallic wheels and axle are present, they "shunt" (short) the
          circuit, which is detected by a relay and signals the section as
          "Occupied." However, this reliance on the rails as the primary
          communication medium is also the track circuit's greatest
          vulnerability, particularly within the operational context of Indian
          Railways. The system is notoriously susceptible to environmental
          failures:
        </div>
        <div className="flex justify-around my-8">
          <Image
            className="w-4/11 rounded-2xl"
            src="/Images/TC.jpg"
            width={760}
            height={480}
            alt="intro"
          />
          <Image
            className="w-4/11 rounded-2xl"
            src="/Images/TC_3D.png"
            width={760}
            height={480}
            alt="intro"
          />
        </div>
      </main>
      {
        // problems
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex text-yellow-100">
        <div className="w-7/11 space-y-16 px-6">
          <div className="text-3xl font-bold text-center">
            Traditional Track Circuits: Limitations
          </div>
          <div className="flex w-10/11 justify-between">
            <div className="bg-neutral-800 w-14/30 rounded-3xl shadow-[0_0_35px_rgba(0,0,0,0.35)] text-center">
              <div className="text-2xl p-4">Flooding</div>
              <div className="text-lg p-4">
                Water-logging during monsoons can shunt the circuit, mimicking a
                train and causing a "right-side" failure (falsely showing
                "Occupied").
              </div>
            </div>
            <div className="bg-neutral-800 w-14/30 rounded-3xl shadow-[0_0_35px_rgba(0,0,0,0.35)] text-center">
              <div className="text-2xl p-4">Ballast Conditions</div>
              <div className="text-lg p-4">
                Poor or wet ballast can cause current leakage, leading to
                unreliable operation.
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 w-10/11 rounded-3xl shadow-[0_0_35px_rgba(0,0,0,0.35)] text-center">
            <div className="text-2xl p-4">Contamination</div>
            <div className="text-lg p-4">
              Rust, sand, or debris on the railhead can insulate the wheels,
              preventing the shunt and creating a catastrophic "wrong-side"
              failure (falsely showing "Clear" when a train is present).
            </div>
          </div>
        </div>
        <Image
          className="h-full w-4/11 rounded-2xl"
          src="/Images/Track_1.png"
          width={760}
          height={1080}
          alt="intro"
        />
      </main>
      {
        // axle con
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex flex-col justify-around text-yellow-100">
        <div className="text-3xl font-bold">
          Modern Solution: The Axle Counter
        </div>
        <div className="text-lg p-4">
          An axle counter system electronically counts train axles entering and
          leaving a block section. The digital logic is elegant and robust:
        </div>
        <div className="text-lg p-16 flex justify-between font-extrabold">
          <div className="bg-stone-500 rounded-lg p-8 w-4/15 text-center">
            Count Axle IN
          </div>
          <div className="bg-stone-500 rounded-lg p-8 w-4/15 text-center">
            Count Axle OUT
          </div>
          <div className="bg-stone-500 rounded-lg p-8 w-4/15 text-center">
            Compare
          </div>
        </div>
        <div>
          <div className="text-lg px-4 py-1">
            <strong>If equal:</strong> {" Section is CLEAR --> Signal turns GREEN"}
          </div>
          <div className="text-lg px-4 py-1">
            <strong>If unequal:</strong> {" Section is OCCUPIED --> Signal stays RED"}
          </div>
        </div>
        <div className="text-lg p-4 flex justify-around font-bold">
          <div>• All-weather reliability</div>
          <div>• Works on any track type</div>
          <div>• Minimal infrastructure needs</div>
        </div>
      </main>
      {
        //adv and sim
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex flex-col justify-around text-yellow-100">
        <div className="text-3xl font-bold p-4 text-center">
          Simulation on Application of Axle Counter
        </div>
        <Experience />
      </main>

      {
        //adv and sim
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] gap-8 flex items-center text-yellow-100">
        <div className=" w-1/2">
          <div className="text-3xl font-bold text-center mt-4">
            Advantages of Axle counter
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)] space-y-3">
            <p className="text-lg">• No insulation joints are required. </p>
            <p className="text-lg">• Monitors very long track sections.</p>
            <p className="text-lg">
              • Last vehicle check is done automatically.{" "}
            </p>
            <p className="text-lg">• No effect due to ballast resistance. </p>
            <p className="text-lg">
              • Error free operation over large temperature range.{" "}
            </p>
            <p className="text-lg">
              • Train detection on rusted, sanded & water logged rails.{" "}
            </p>
            <p className="text-lg">• Immune to traction return currents. </p>
            <p className="text-lg">
              • No special type of Track Relay is required.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-3xl font-bold text-center mb-4">
            Types of Axle Counter Architectures
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)] space-y-2">
            <p className="text-lg">
              • Single Section Axle Counter (SSAC) – Used for short track
              sections or point zones.
            </p>
            <p className="text-lg">
              • Multi Section Digital Axle Counter (MSDAC) – Capable of
              monitoring multiple track sections from one centralized unit.
            </p>
            <p className="text-lg">
              • Block Proving Axle Counter (BPAC) – Used for block section
              control between stations for train detection and clearance.
            </p>
            <p className="text-lg">
              • Advanced Digital Axle Counter (ADAC) – Offers higher reliability
              and integration with modern signaling systems.
            </p>
            <p className="text-lg">
              • Centralized Axle Counter System (CACS) – Centralized processing
              for large networks, reducing local equipment needs.
            </p>
          </div>
        </div>
      </main>
      {
        // componets
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-8 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex flex-col justify-around text-yellow-100">
        <div className="text-3xl font-bold p-4">
          Basic Components of Axle counter
        </div>
        <div className="text-lg space-y-4">
          <div className="bg-neutral-800 p-4 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)]">
            <h3 className="font-semibold mb-2">
              1. Trackside Equipment [Axle Detectors (Wheel Sensors)]
            </h3>
            <div className="ml-8">
              <p>
                • Mounted on the rail, usually in pairs (for direction sensing).
              </p>
              <p>• Use inductive, magnetic, or electromagnetic principles.</p>
              <p>• Detect the metal mass of the wheel passing over them.</p>
              <p>• Generate electrical pulses corresponding to axle passage.</p>
            </div>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)]">
            <h3 className="font-semibold mb-2">
              2. Indoor Equipment (Evaluator Unit)
            </h3>
            <div className="ml-8">
              <p>• Located in the relay room or station cabin.</p>
              <p>• Receives pulses from detectors via communication cables.</p>
              <p>• Processes, counts, and compares the “IN” and “OUT” axles.</p>
              <p>
                • Outputs “Track Clear” or “Track Occupied” status to the
                interlocking system.
              </p>
            </div>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)]">
            <h3 className="font-semibold mb-2">
              3. Communication Channel (Communication Engineering Part)
            </h3>
            <div className="ml-8">
              <p>
                • Provides reliable transmission of signals between trackside
                sensors and indoor evaluator units.
              </p>
              <p>
                • Can be copper cable, optical fiber, or digital communication
                link (Ethernet or serial bus in modern systems).
              </p>
            </div>
          </div>
        </div>
      </main>
      {
        // analog domain
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] flex justify-around text-yellow-100">
        <div className="w-1/2 flex flex-col justify-center-safe">
          <div className="text-3xl font-bold p-4">Analog Domain</div>
          <div className="text-lg p-4 ">
            The Analog signal generation and processing is the heart of the axle
            counter system, where the actual wheel detection, pulse generation,
            and signal conditioning happen before any digital logic or
            communication link comes into play. The Analog domain is the front
            end of the axle counter system — the part between the wheel sensor
            on the rail and the digital evaluator’s input stage.
          </div>
        </div>
        <Image
          className="w-1/2 h-full rounded-2xl"
          src="/Images/Analog_domain.jpg"
          width={760}
          height={1080}
          alt="intro"
        />
      </main>
      {
        // wheel
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex">
        <div className="h-full flex flex-col justify-center-safe">
          <h3 className="text-3xl font-bold mb-4">
            1. Wheel Sensor Physics (Inductive Detection Principle)
          </h3>
          <div>
            <p>
              Most Indian Railways axle counters use inductive wheel sensors
              (sometimes referred to as coil-based detectors).
            </p>
            <p className="font-bold">Each sensor consists of:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Two coils (transmitter and receiver) embedded in a sealed
                housing fixed on the rail.
              </li>
              <li>A ferromagnetic core to concentrate the magnetic field.</li>
              <li>
                Permanent magnet or excitation coil generating a steady or
                oscillating magnetic field.
              </li>
            </ul>
            <p className="mt-4 font-bold">Working Principle:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                The transmitter coil generates an alternating magnetic field
                (usually sinusoidal).
              </li>
              <li>The receiver coil picks up a portion of this field.</li>
              <li>
                When no wheel is present, the magnetic coupling between coils is
                constant.
              </li>
              <li>
                When a steel wheel flange passes, the wheel’s steel mass
                disturbs the magnetic flux:
                <ul className="list-[circle] pl-8 my-4">
                  <li>It changes the mutual inductance between coils.</li>
                  <li>
                    This results in a modulation of the induced voltage in the
                    receiver coil.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="my-4">
              This change in signal is analog and continuous — a small
              sinusoidal waveform whose amplitude and phase vary as the wheel
              passes.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-3/3 h-1/2 rounded-2xl p-3"
            src="/Images/Wheel_1.png"
            width={1080}
            height={1080}
            alt="intro"
          />
          <Image
            className="w-3/3 h-1/2 rounded-2xl p-3"
            src="/Images/Wheel_2.png"
            width={1080}
            height={1080}
            alt="intro"
          />
        </div>
      </main>
      {
        // AFE
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-8 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex">
          <div className="flex flex-col justify-center-safe">
            <h3 className="text-3xl font-bold mb-4">
              2. Analog Front-End Circuit (AFE)
            </h3>
            <div>
              <p>
                This is the basic circuitry between the sensor and the digital
                evaluator input. It is critical for reliability and noise
                immunity.
              </p>
              <p className="mt-2 font-semibold">Functional Units:</p>
              <ol className="list-decimal pl-8">
                <li className="mt-2">
                  <strong>Excitation Driver:</strong>
                  <ul className="list-disc pl-8">
                    <li>
                      Feeds an AC signal (usually sine wave) into the
                      transmitter coil.
                    </li>
                    <li>
                      Frequency-stable oscillator (often quartz-controlled).
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Receiver Amplifier:</strong>
                  <ul className="list-disc pl-8">
                    <li>Takes weak induced signal from receiver coil.</li>
                    <li>High common-mode rejection, differential amplifier.</li>
                    <li>Gain typically 40–60 dB.</li>
                    <li>
                      Uses instrumentation amplifiers or low-noise op-amps.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Band-pass Filter:</strong>
                  <ul className="list-disc pl-8">
                    <li>Passes only the frequency of interest.</li>
                    <li>Rejects traction current harmonics and noise.</li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Envelope Detector / Rectifier:</strong>
                  <ul className="list-disc pl-8">
                    <li>
                      Converts the sinusoidal waveform to a unipolar envelope
                      (magnitude response).
                    </li>
                    <li>
                      Helps identify the wheel’s presence as an amplitude
                      variation.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Comparator / Schmitt Trigger:</strong>
                  <ul className="list-disc pl-8">
                    <li>Compares the detected signal against a threshold.</li>
                    <li>
                      Converts the analog envelope into a clean digital pulse
                      (for counting).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        <div>
          <Image
            className="w-3/3 h-full rounded-2xl p-3"
            src="/Images/AFE_2.jpg"
            width={1080}
            height={1080}
            alt="intro"
          />
        </div>
      </main>
      {
        // ACP
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100">
        <div className="h-full">
          <div className="flex flex-col justify-center-safe">
            <h3 className="text-3xl font-bold mb-4">
              3. Analog Counting Principle
            </h3>
            <div>
              <p className="font-semibold">(a) Pulse Generation:</p>
              <ul className="list-disc pl-8">
                <li>
                  The analog field disturbance produces one complete pulse shape
                  (rise and fall) each time a wheel passes.
                </li>
                <li>The system recognizes this as one valid axle.</li>
                <li>
                  Two sensors (S1 and S2) generate two signals with a phase
                  difference, which determines direction:
                  <ul className="list-[circle] pl-8 mt-2">
                    <li>S1 leads S2 → “IN” count.</li>
                    <li>S2 leads S1 → “OUT” count.</li>
                  </ul>
                </li>
              </ul>

              <p className="mt-4 font-semibold">
                (b) Analog-to-Digital Transition:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  The comparator converts each analog pulse into a digital edge.
                </li>
                <li>
                  The evaluator receives this as a TTL-compatible square pulse.
                </li>
                <li>
                  These pulses are then processed digitally for counting and
                  verification.
                </li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 mt-16">
              4. Analog Signal Transmission (Communication Line Level)
            </h3>
            <div>
              <ul className="list-disc pl-8">
                <li>
                  From the track sensor to evaluator, analog signals are
                  transmitted via twisted pair copper cable.
                </li>
                <li>
                  The signal is differentially transmitted to reject common-mode
                  noise (important near traction lines).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {
        // 5 and 6
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex">
        <div className="h-full">
          <div className="flex flex-col justify-center-safe">
            <h3 className="text-3xl font-bold mb-4">
              5. Noise Immunity and Analog Safeguards
            </h3>
            <div>
              <p>
                The analog front end must operate reliably in harsh EMI
                environments (due to traction currents, lightning, etc.).
              </p>
              <p className="mt-2 font-semibold">Noise Countermeasures:</p>
              <ul className="list-disc pl-8">
                <li>Differential transmission using twisted pairs.</li>
                <li>Band-pass filtering around excitation frequency.</li>
                <li>Metallic shielding and proper cable grounding.</li>
                <li>Isolation transformers between rail and electronics.</li>
                <li>Transient suppressors (MOVs or TVS diodes).</li>
                <li>
                  <strong>Fail-safe principle:</strong> If the analog signal is
                  lost or distorted beyond threshold → no count is registered →
                  “occupied” is assumed.
                </li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold mb-4 mt-8">
              7. Analog Signature Characteristics
            </h3>
            <div>
              <p>
                Each passing wheel generates a unique analog signature, used to
                verify proper detection.
              </p>
              <p className="mt-2 font-semibold">
                Example (qualitative description):
              </p>
              <ul className="list-disc pl-8">
                <li>As wheel approaches → amplitude slowly rises.</li>
                <li>As wheel center passes → sharp peak.</li>
                <li>As wheel leaves → amplitude drops symmetrically.</li>
                <li>
                  Result: roughly bell-shaped envelope centered on wheel
                  position.
                </li>
              </ul>
              <p className="mt-4">
                In systems with two detectors (S1, S2), the phase delay between
                envelopes is proportional to the wheel speed and spacing.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-3/3 h-full rounded-2xl p-3"
            src="/Images/Noise.jpg"
            width={512}
            height={1080}
            alt="intro"
          />
        </div>
      </main>
      {
        //sensor
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 gap-6 flex">
        <div className="h-full">
          <div className="text-3xl font-bold mb-4">
            Signal Processing (At the Sensor)
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)] space-y-3">
            <p className="text-lg">
              <span className="font-semibold">1. Sensing & Conditioning:</span>{" "}
              Weak analog coil signals are amplified and filtered.
            </p>
            <p className="text-lg">
              <span className="font-semibold">
                2. Digital Conversion (ADC):
              </span>{" "}
              Analog pulses are converted into a digital format.
            </p>
            <p className="text-lg">
              <span className="font-semibold">3. Feature Extraction:</span> The
              system identifies key parameters like wheel direction, polarity,
              and timing.
            </p>
            <div className="text-lg">
              <span className="font-semibold">4. Message Encoding:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  A digital message frame is created (Sensor ID, wheel count,
                  direction).
                </li>
                <li>
                  A CRC (Cyclic Redundancy Check) checksum is added for error
                  protection.
                </li>
              </ul>
            </div>
            <p className="text-lg">
              <span className="font-semibold">5. Modulation:</span> The final
              digital message is converted into an FSK waveform for
              transmission.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-3/3 h-full rounded-2xl p-3"
            src="/Images/Sensor.jpg"
            width={512}
            height={512}
            alt="intro"
          />
        </div>
      </main>
      {
        //sensor 2
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 gap-6 flex">
        <div className="h-full">
          <div className="text-3xl font-bold mb-4">
            Transmission: Frequency Shift Keying (FSK)
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)] space-y-3">
            <p className="text-lg">
              <span className="font-semibold">What it is:</span> A robust method
              that uses two distinct frequencies to send binary data over
              railway cables.
            </p>
            <ul className="list-disc list-inside ml-6 text-lg">
              <li>Frequency 1 (f₁) = Binary ‘1’</li>
              <li>Frequency 2 (f₂) = Binary ‘0’</li>
            </ul>

            <div className="text-lg">
              <span className="font-semibold">Key Advantages:</span>
              <ul className="list-disc list-inside ml-6">
                <li>
                  <span className="font-semibold">High Noise Immunity:</span>{" "}
                  Relies on frequency, not amplitude. It is unaffected by
                  voltage noise or signal strength loss (attenuation).
                </li>
                <li>
                  <span className="font-semibold">
                    Long-Distance Reliability:
                  </span>{" "}
                  The frequency remains stable and readable over kilometers of
                  cable.
                </li>
                <li>
                  <span className="font-semibold">Inherently Fail-Safe:</span> A
                  missing, invalid, or distorted frequency is interpreted by the
                  evaluator as <span className="italic">"track occupied"</span>,
                  ensuring safety.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-3/3 h-full rounded-2xl p-3"
            src="/Images/FSK.jpg"
            width={512}
            height={512}
            alt="intro"
          />
        </div>
      </main>
      {
        //sensor 3
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 gap-6 flex">
        <div className="h-full">
            <div className="text-3xl font-bold">
              Receiver (Evaluator) &amp; Error Checking
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.35)] space-y-4">
              {/* 1️⃣ Demodulation */}
              <div>
                <p className="text-lg font-semibold">1. Demodulation:</p>
                <ul className="list-disc list-inside ml-6 text-lg">
                  <li>
                    The evaluator filters the incoming signal to isolate the FSK
                    frequencies.
                  </li>
                  <li>
                    It detects the f₁/f₂ sequence and reconstructs the original
                    binary message.
                  </li>
                </ul>
              </div>

              {/* 2️⃣ Integrity Check (CRC) */}
              <div>
                <p className="text-lg font-semibold">
                  2. Integrity Check (CRC):
                </p>
                <ul className="list-disc list-inside ml-6 text-lg">
                  <li>
                    The CRC is a{" "}
                    <span className="italic">"mathematical fingerprint"</span>{" "}
                    used to verify data.
                  </li>
                  <li>
                    <span className="font-semibold">Transmitter:</span>{" "}
                    Calculates a unique checksum from the data and sends it.
                  </li>
                  <li>
                    <span className="font-semibold">Receiver:</span> Performs
                    the exact same calculation on the received data.
                  </li>
                </ul>
              </div>

              {/* 3️⃣ Final Decision Logic */}
              <div>
                <p className="text-lg font-semibold">
                  3. Final Decision Logic:
                </p>
                <ul className="list-disc list-inside ml-6 text-lg">
                  <li>
                    <span className="font-semibold">If Checksums MATCH:</span>{" "}
                    The message is valid. The axle count and track status are
                    updated.
                  </li>
                  <li>
                    <span className="font-semibold">
                      If Checksums MISMATCH:
                    </span>{" "}
                    The message is corrupt and discarded{" "}
                    <span className="italic">(fail-safe)</span>.
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div>
          <Image
            className="w-3/3 h-full rounded-2xl p-3"
            src="/Images/idk.jpg"
            width={512}
            height={512}
            alt="intro"
          />
        </div>
      </main>
      {
        // Scope
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-16 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex">
        <div className="h-full">
          <div className="flex flex-col justify-center-safe">
            <h2 className="text-3xl font-bold mb-4">
              Future Scope of Axle Counter
            </h2>

            <h3>1. Unified Infrastructure (The Shift)</h3>
            <div>
              <ul className="list-disc pl-8">
                <li>
                  <strong>Convergence:</strong> Telecom is no longer a separate
                  utility; the IP-MPLS backbone is now an integral,
                  safety-critical component of Railway Signalling.
                </li>
                <li>
                  <strong>Bandwidth Revolution:</strong> Replaces legacy V.21
                  modems (300 bps bottleneck) with high-speed IP/OFC, removing
                  data constraints.
                </li>
              </ul>
            </div>

            <h3 className="mt-6">2. Unleashing “Smart” Axle Counters</h3>
            <div>
              <ul className="list-disc pl-8">
                <li>
                  <strong>Beyond “Occupied/Clear”:</strong> Modern systems
                  (e.g., Frauscher FDS, Siemens RailXplore) utilize the IP
                  network to stream continuous, rich data.
                </li>
                <li>
                  <strong>Real-Time Analytics:</strong> Transmits wheel-flange
                  profiles, train speed, sensor voltage levels, and detailed
                  event logs.
                </li>
              </ul>
            </div>

            <h3 className="mt-6">3. From Reactive to Predictive (IoT)</h3>
            <div>
              <ul className="list-disc pl-8">
                <li>
                  <strong>Remote Diagnostics:</strong> Centralized NMS allows
                  engineers to monitor the entire infrastructure health in real
                  time.
                </li>
                <li>
                  <strong>Predictive Maintenance:</strong> Identifies failing
                  components before operational failure, transforming signalling
                  into a fully intelligent IoT asset.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-4/3 h-full rounded-2xl p-3"
            src="/Images/Furute.jpg"
            width={1080}
            height={1080}
            alt="intro"
          />
        </div>
      </main>
      {
        // Graph
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-8 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100">
        <div className="">
          <div className="h-full">
            <div className="flex flex-col justify-center-safe">
              <h2 className="text-3xl font-bold mb-4">
                Deployment Trends and Market Growth
              </h2>

              <p className="text-lg mb-4">
                While a total network-wide number is not publicly listed,
                deployment data from specific reports shows a strong trend
                toward adoption.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">3,410 Block Sections</h3>
                  <p>
                    Were equipped with axle counters for “Last Vehicle Check”
                    (as of 2012). This shows a significant early adoption for
                    block proving.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">1,503 Detection Points</h3>
                  <p>
                    Were planned for installation across 1,095 track sections in
                    a single 2012 Mumbai (MUTP) project alone.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">3,000 Units</h3>
                  <p>
                    Of a specific MSDAC type were installed across 7 railway
                    zones as of 2023 (as per a recent report).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-2/5">
          <Image
            className="w-1/3 rounded-2xl p-3"
            src="/Images/charts.jpg"
            width={1080}
            height={1080}
            alt="intro"
          />
          <div className="w-3/5 h-3/5 p-3">
            <AdoptionChart />
          </div>
        </div>
      </main>
      {
        // conculsion
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-8 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex flex-col justify-center-safe gap-6 items-center">
        <h2 className="text-3xl font-bold mb-4">
          Conclusion: The Backbone of Modern Signalling
        </h2>

        <p className="text-lg mb-4">
          The massive deployment of Digital Axle Counters (DAC) marks a
          definitive paradigm shift in Indian Railways' signalling
          infrastructure. By replacing vulnerable track circuits, IR has
          successfully mitigated chronic failures caused by waterlogging, rail
          rust, and theft.
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>Reliability:</strong> Proven immunity to tropical weather
            and harsh track conditions.
          </li>
          <li>
            <strong>Scalability:</strong> The transition from simple SSDAC to
            networked MSDAC supports complex yard layouts and Automatic Block
            Signalling (ABS).
          </li>
          <li>
            <strong>Future-Ready:</strong> With the integration of IP-MPLS
            backbones and Kavach, axle counters have evolved from passive
            sensors into intelligent IoT assets, enabling predictive maintenance
            and securing the safety of India’s high-speed rail ambitions.
          </li>
        </ul>
      </main>
      {
        // conculsion
      }
      <main className="h-9/10 w-9/10 mx-auto bg-neutral-700 my-16 rounded-2xl px-16 py-8 shadow-[0_0_35px_rgba(0,0,0,0.35)] text-yellow-100 flex flex-col justify-center-safe gap-6 items-center">
        <div className="text-9xl font-bold">Thank You</div>
      </main>
    </div>
  );
}

export default Home;
