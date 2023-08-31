import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "../../icons";

const Prompts = () => {
  return (
    <div className="px-2 sm:px-10 pt-4">
      <h1 className="text-center font-bold sm:text-2xl text-md text-sky-600 py-4 bg-slate-200">
        1000+ câu lệnh ChatGPT đỉnh cao chỉ cần sao chép, dán và thúc đẩy doanh
        nghiệp của bạn một cách vượt trội
      </h1>
      <div className="space-y-1 flex flex-col">
        <h2 className="text-center font-semibold text-medium underline py-4">Làm Chủ ChatGPT</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💻 Cách để làm chủ ChatGPT</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left">
                  Việc thành thạo ChatGPT, như bất cứ điều gì trong marketing,
                  đều đòi hỏi có sự thử nghiệm. Bạn đã mất bao lâu để trở nên
                  giỏi viết copywriting, quảng cáo Facebook, SEO, hoặc bất kỳ
                  ngành nghề nào mà bạn đã thành thạo? Tương tự như thế, ChatGPT
                  là một công cụ cách mạng đòi hỏi sự cam kết và thử nghiệm để
                  đạt được kết quả đột phá mà nó có thể cung cấp. Tuy nhiên,
                  điều này không phải kéo dài nữa. Hãy sử dụng những mẹo này
                  (cùng với các gợi ý trong The Marketer&apos;s Bible) để thực
                  sự tăng tốc độ học của bạn với ChatGPT: <br />
                  1. Làm quen với nền tảng: Bắt đầu bằng cách khám phá ChatGPT
                  và các tính năng của nó. Cảm nhận cách mà nền tảng này hoạt
                  động, những gì nó có thể làm và cách nó có thể giúp trong việc
                  kinh doanh của bạn. <br />
                  2. Xác định mục tiêu của bạn: Xác định những gì bạn muốn đạt
                  được với ChatGPT. Bạn muốn tạo ra các ý tưởng cho một sản phẩm
                  hoặc dịch vụ mới? Bạn muốn cải thiện nội dung tiếp thị của
                  mình? Bạn cần giúp đỡ với dịch vụ khách hàng? Việc biết rõ mục
                  tiêu của mình sẽ giúp bạn tập trung nỗ lực và tận dụng tối đa
                  các tính năng của nền tảng.
                  <br /> 3. Luyện tập việc tạo ra các phản hồi: Dành thời gian
                  để tạo ra phản hồi sử dụng các gợi ý và đầu vào khác nhau.
                  Càng luyện tập nhiều, bạn sẽ càng trở nên tốt hơn trong việc
                  sáng tạo các gợi ý hiệu quả và nhận được các phản hồi phù hợp
                  nhất.
                  <br /> 4. Tinh chỉnh các câu lệnh của bạn: Khi tạo ra phản
                  hồi, phân tích chúng cẩn thận và tìm kiếm các điểm cần cải
                  thiện. Sử dụng thông tin này để tinh chỉnh các gợi ý của bạn
                  và đạt được kết quả tốt hơn theo thời gian.
                  <br /> 5. Học từ các sai lầm: Hãy nhớ rằng ChatGPT không hoàn
                  hảo và đôi khi nó có thể tạo ra những câu trả lời không liên
                  quan hoặc vô nghĩa. Sử dụng những lỗi này như cơ hội học tập
                  để cải thiện các gợi ý của bạn và đạt được kết quả chính xác
                  hơn.
                  <br /> 6. Sử dụng ChatGPT như là một công cụ, không phải là
                  thay thế: Hãy nhớ rằng ChatGPT là một công cụ để bổ sung kiến
                  thức và chuyên môn của bạn. Sử dụng nó để tạo ra các ý tưởng,
                  cung cấp thông tin và hỗ trợ ra quyết định, nhưng đừng phụ
                  thuộc hoàn toàn vào nó.
                  <br /> 7. Cập nhật với các tính năng và bản cập nhật mới:
                  ChatGPT liên tục phát triển, với các tính năng và bản cập nhật
                  mới được phát hành thường xuyên. Hãy cập nhật với những thay
                  đổi này để tận dụng tối đa các khả năng của nền tảng.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🤳 Tài khoản ChatGPT-Lite</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <p>VIDEO HƯỚNG DẪN KÍCH HOẠT TÀI KHOẢN CHATGPT-LITE</p>
                  <iframe
                    className="w-full px-4 sm:w-[400px]"
                    width="300" // Chiều rộng của video
                    height="315" // Chiều cao của video
                    src="https://www.youtube.com/embed/gh154P-hNqk"
                    title="YouTube Video"
                    allowFullScreen
                  ></iframe>
                  <p>
                    Chào bạn Cám ơn bạn vì đã sử dụng tài khoản ChatGPT-Lite của
                    chúng tôi. Giới thiệu sơ qua về ChatGPT-Lite: Chúng tôi
                    không có chức năng phân biệt ra từng khung chat riêng biệt
                    như ChatGPT nhưng bù lại, chúng tôi có chức năng lấy dữ liệu
                    thật từ internet. Để sử dụng chức năng này bạn hãy làm theo
                    các bước sau: <br />
                    Bước 1: click vào “Menu” (phía bên trái của phần nhập tin
                    nhắn, sau đó chọn /sydney Đây là chức năng lấy thông tin từ
                    internet, cơ chế hoạt động đó là nó sẽ lấy dữ liệu về và
                    phân tích sau đó cho bạn kết quả và nó cũng có tính cách
                    riêng. <br />
                    Bước 2: Nếu bạn muốn dùng tiếng Việt, hãy nhập vào khung
                    chat dòng lệnh: “Nói tiếng Việt với tôi nhé”
                    <br />
                    Bước 3: nhập câu hỏi bạn muốn Sydney truy vấn từ internet.
                    <br />
                    Ví dụ: /q đội bóng nào là đội vô địch World Cup 2022? Nếu
                    bạn muốn Sydney giúp bạn viết bài hay thiết lập kế hoạch dựa
                    vào dữ liệu bạn đã lấy từ internet thì lúc này bạn không cần
                    /q nữa. Chỉ cần đưa ra lệnh như bình thường. Sydney nói
                    riêng hay ChatGPT nói chung giống như một đứa trẻ, bạn phải
                    “dạy” nó bằng cách cho nó dữ liệu thì nó mới có thể đáp ứng
                    được yêu cầu của bạn. <br />- *Lưu ý 1: Hiện tại server của
                    Open AI đang không ổn định nên nếu nó đưa ra thông tin sai,
                    bạn có thể reset bằng cách chuyển sang chế độ “/chatgpt” sau
                    đó đợi nó trả lời rồi nhập “/sydney” để tiếp tục trò chuyện
                    cùng Sydney. <br />- *Lưu ý 2: Trong ChatGPT-Lite của chúng
                    tôi còn có nhân cách DAN - 1 nhân cách ba xạo, nếu bạn hỏi
                    điều gì mà nó không có dữ liệu thì nó sẽ chế ra. Nếu bạn cần
                    một nhân vật để trò chuyện giải trí, hãy tìm DAN. Chỉ cần
                    bấm /dan là DAN sẽ hiện ra trò chuyện cùng bạn, Nếu ko muốn
                    gặp DAN nữa, hãy bấm /chatgpt để reset. <br />- Lưu ý 3: Nếu
                    trong quá trình sử dụng mà bạn gặp lỗi “something went
                    wrong” thì điều đó có nghĩa là máy chủ của Open AI đang bị
                    trục trặc. Vì vậy ChatGPT-Lite của chúng tôi cũng bị ảnh
                    hưởng. Mong bạn thông cảm ạ. <br />
                    Chúc bạn có những trải nghiệm tuyệt vời, Hãy liên lạc với
                    chúng tôi qua
                    [support@yuukisama.io](mailto:support@yuukisama.io) để được
                    hỗ trợ khi có thắc mắc nhé! <br />
                    Trân trọng,Yuuki Sama
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🪧 13 loại câu lệnh cho ChatGPT</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex space-y-4">
                  <p>
                    1. Câu lệnh mở: Những loại câu lệnh này cho phép ChatGPT tạo
                    ra nhiều loại phản hồi. Ví dụ: &quot;Hãy cho tôi biết về
                    trải nghiệm của bạn với [sản phẩm/dịch vụ]&quot; hoặc
                    &quot;Bạn nghĩ gì về [ngành/ngách]?&quot;
                    <br />
                    2. Câu lệnh nhiều lựa chọn: Những loại câu lệnh này cung cấp
                    một tập hợp các tùy chọn để ChatGPT chọn lựa. Ví dụ:
                    &quot;Bạn thích [sản phẩm/dịch vụ] nào hơn?&quot; hoặc
                    &quot;Bạn thích [Lựa chọn A] hay [Lựa chọn B]?&quot;
                    <br />
                    3. Câu lệnh điền vào chỗ trống: Những loại câu lệnh này cho
                    phép bạn nhập thông tin cụ thể vào một câu hoặc câu hỏi. Ví
                    dụ: &quot;Công ty của tôi cung cấp [sản phẩm/dịch vụ] để
                    giúp khách hàng [đạt được mục tiêu/lợi ích].&quot;
                    <br />
                    4. Câu lệnh Có/Không: Những loại câu lệnh này yêu cầu
                    ChatGPT trả lời đơn giản bằng một câu &quot;Có&quot; hoặc
                    &quot;Không&quot;. Ví dụ: &quot;Bạn có nghĩ rằng
                    [ngành/ngách] đang ngày càng phổ biến không?&quot; hoặc
                    &quot;Bạn đã từng sử dụng [sản phẩm/dịch vụ] chưa?&quot;
                    <br />
                    5. Câu lệnh xếp hạng: Những loại câu lệnh này yêu cầu
                    ChatGPT xếp hạng một tập hợp các mục theo thứ tự ưu tiên
                    hoặc mức độ quan trọng. Ví dụ: &quot;Xếp hạng [sản phẩm/dịch
                    vụ] này từ phổ biến nhất đến ít phổ biến nhất&quot; hoặc
                    &quot;Bạn nghĩ [sản phẩm/dịch vụ] nào có giá trị nhất đối
                    với khách hàng?&quot;
                    <br />
                    6. Câu lệnh theo kịch bản: Những loại câu lệnh này yêu cầu
                    ChatGPT cung cấp phản hồi dựa trên một tình huống hoặc kịch
                    bản cụ thể. Ví dụ: &quot;Bạn sẽ làm gì nếu khách hàng phàn
                    nàn về [vấn đề]?&quot; hoặc &quot;Bạn sẽ xử lý tình huống
                    phát sinh [vấn đề] như thế nào?&quot;
                    <br />
                    7. Câu lệnh so sánh: Những loại câu lệnh này yêu cầu ChatGPT
                    so sánh hoặc đối chiếu hai hoặc nhiều mục với nhau. Ví dụ:
                    &quot;Sự khác biệt giữa [sản phẩm A] và [sản phẩm B] là
                    gì?&quot; hoặc &quot;Bạn nghĩ [chiến lược tiếp thị] nào hiệu
                    quả hơn?&quot;
                    <br />
                    8. Câu lệnh dự đoán: Những loại câu lệnh này yêu cầu ChatGPT
                    đưa ra dự đoán hoặc dự báo về một sự kiện hoặc xu hướng
                    trong tương lai. Ví dụ: &quot;Bạn nghĩ điều gì sẽ là [xu
                    hướng/vấn đề] lớn nhất trong [ngành/ngách] trong 5 năm
                    tới?&quot; hoặc &quot;Bạn nghĩ [sản phẩm/dịch vụ] sẽ hoạt
                    động như thế nào trên thị trường vào năm tới?&quot;
                    <br />
                    9. Câu lệnh giải thích: Những loại câu lệnh này yêu cầu
                    ChatGPT giải thích một khái niệm hoặc quy trình. Ví dụ:
                    &quot;Bạn có thể giải thích [thuật ngữ kỹ thuật] bằng những
                    thuật ngữ đơn giản không?&quot; hoặc &quot;[Sản phẩm/dịch
                    vụ] hoạt động như thế nào?&quot;
                    <br />
                    10. Câu lệnh ý kiến: Những loại câu lệnh này yêu cầu ChatGPT
                    đưa ra ý kiến hoặc quan điểm về một chủ đề. Ví dụ: &quot;Ý
                    kiến của bạn về [chủ đề gây tranh cãi] là gì?&quot; hoặc
                    &quot;Bạn có nghĩ [xu hướng/công nghệ mới] sẽ thành công
                    trên thị trường không?&quot;
                    <br />
                    11. Câu lệnh hướng dẫn: Những loại câu lệnh này yêu cầu
                    ChatGPT cung cấp định hướng hoặc chỉ dẫn về một nhiệm vụ
                    hoặc quy trình cụ thể. Ví dụ: &quot;Làm cách nào để tôi
                    [thực hiện một tác vụ cụ thể]?&quot; hoặc &quot;Các bước để
                    [hoàn thành một quy trình cụ thể] là gì?&quot;
                    <br />
                    12. Câu lệnh phản hồi (feedback): Những loại câu lệnh này
                    yêu cầu ChatGPT cung cấp phản hồi hoặc đề xuất về sản phẩm,
                    dịch vụ hoặc ý tưởng. Ví dụ: &quot;Bạn có phản hồi
                    (feedback) gì cho [trang web/chiến dịch tiếp thị] của
                    tôi?&quot; hoặc &quot;Bạn có bất kỳ đề xuất nào để cải thiện
                    [sản phẩm/dịch vụ] không?&quot;
                    <br />
                    13. Câu lệnh đồng cảm: Những loại câu lệnh này yêu cầu
                    ChatGPT thể hiện sự đồng cảm hoặc thấu hiểu đối với khách
                    hàng hoặc người dùng. Ví dụ: &quot;Tôi đang gặp rắc rối với
                    [vấn đề], bạn có thể giúp tôi không?&quot; hoặc &quot;Tôi
                    cảm thấy [cảm xúc], tôi có thể làm gì để cảm thấy tốt
                    hơn?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>❓ Câu lệnh Điền Vào Chỗ Trống so với Câu lệnh Mở</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex space-y-4">
                  <p>
                    Trong tài liệu này, hầu hết bạn sẽ tìm thấy câu lệnh ChatGPT
                    điền vào chỗ trống và mở.
                    <br /> Sử dụng câu lệnh mở và điền vào chỗ trống cho ChatGPT
                    là một cách mạnh mẽ để tạo những phản hồi và thông tin chi
                    tiết có thể giúp bạn đạt được mục tiêu kinh doanh của mình.
                    Đây là cách sử dụng chúng một cách hiệu quả: <br />
                    1. Câu lệnh mở: Câu lệnh này được thiết kế để gợi ra nhiều
                    phản hồi và ý tưởng từ ChatGPT. Khi sử dụng câu lệnh mở, hãy
                    càng mở rộng càng tốt, tránh các thuật ngữ hoặc biệt ngữ cụ
                    thể có thể giới hạn phạm vi phản hồi mà bạn nhận được.{" "}
                    <br />- Ví dụ: &quot;Một số ý tưởng sáng tạo để cải thiện sự
                    tương tác của khách hàng trong ngành của tôi là gì?&quot;{" "}
                    <br />
                    2. Câu lệnh điền vào chỗ trống: Câu lệnh này cung cấp một
                    khuôn khổ để ChatGPT tạo ra các câu trả lời dành riêng cho
                    nhu cầu của bạn. Khi sử dụng lời nhắc điền vào chỗ trống,
                    hãy càng cụ thể càng tốt, cung cấp chi tiết rõ ràng về thông
                    tin bạn muốn nhận. <br />- Ví dụ: &quot;Tôi muốn tạo một
                    email bán hàng tập trung vào [điền tên sản phẩm]. Tôi nên
                    đưa vào một số điểm bán hàng chính nào?&quot; Bằng cách sử
                    dụng kết hợp câu lệnh mở và lời nhắc điền vào chỗ trống, bạn
                    có thể tạo ra nhiều loại câu trả lời phù hợp với nhu cầu và
                    mục tiêu của mình. Hãy nhớ phân tích những phản hồi này một
                    cách cẩn thận, tinh chỉnh câu lệnh và đầu vào của bạn theo
                    thời gian để có được kết quả tốt hơn và chính xác hơn. Khi
                    thực hành, bạn có thể sử dụng ChatGPT để tạo ra những hiểu
                    biết sâu sắc và ý tưởng có thể giúp bạn đạt được mục tiêu
                    kinh doanh của mình.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>✨ Cách hoạt động của ChatGPT</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex space-y-4">
                  <p>
                    Dưới đây là một số câu lệnh mà bạn có thể sử dụng để hỏi
                    ChatGPT về cách thức hoạt động của nó: 1. &quot;ChatGPT là
                    gì và nó hoạt động như thế nào?&quot;
                    <br />
                    2. &quot;Làm cách nào để ChatGPT tạo phản hồi cho câu lệnh
                    của tôi?&quot;
                    <br />
                    3. &quot;Dữ liệu đào tạo mà ChatGPT sử dụng để tạo phản hồi
                    là gì?&quot;
                    <br />
                    4. &quot;Làm cách nào để ChatGPT học hỏi từ thông tin đầu
                    vào của tôi và cải thiện phản hồi của nó theo thời
                    gian?&quot;
                    <br />
                    5. &quot;Một số phương pháp hay nhất để sử dụng ChatGPT hiệu
                    quả là gì?&quot;
                    <br />
                    6. &quot;Các phản hồi do ChatGPT tạo ra chính xác đến mức
                    nào và những yếu tố nào có thể ảnh hưởng đến độ chính
                    xác?&quot;
                    <br />
                    7. &quot;ChatGPT có thể hiểu đầu vào ngôn ngữ tự nhiên không
                    và nó diễn giải chúng như thế nào?&quot;
                    <br />
                    8. &quot;Những hạn chế của ChatGPT là gì và loại câu lệnh
                    hoặc đầu vào nào có thể không hoạt động tốt?&quot;
                    <br />
                    9. &quot;Làm cách nào để đánh giá chất lượng phản hồi do
                    ChatGPT tạo ra?&quot;
                    <br />
                    10. &quot;Có mẹo hay thủ thuật nào có thể giúp tôi đạt được
                    kết quả tốt hơn khi sử dụng ChatGPT không?&quot;
                    <br />
                    Bằng cách hỏi những loại câu hỏi này, bạn có thể hiểu rõ hơn
                    về cách ChatGPT hoạt động, những gì nó có thể làm và cách sử
                    dụng nó hiệu quả nhất. Bạn có thể sử dụng thông tin này để
                    tạo câu lệnh hiệu quả hơn, tinh chỉnh thông tin đầu vào của
                    mình và tạo phản hồi chính xác và sâu sắc hơn theo thời
                    gian.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Hỗ Trợ Viết Quảng Cáo</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📊 Cải thiện nội dung quảng cáo hiện tại của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <p>
                    ©️ Làm cho văn bản này thuyết phục hơn: [sao chép và dán văn
                    bản].
                    <br />
                    ©️ Làm cho văn bản này kết nối nhiều hơn với người đọc: [sao
                    chép và dán văn bản].
                    <br />
                    ©️ Viết lại văn bản này để đi sâu hơn vào các điểm khó khăn
                    và mong muốn của khách hàng tiềm năng: [sao chép và dán văn
                    bản].
                    <br />
                    ©️ Viết lại văn bản này bằng công thức sao chép AIDA: [sao
                    chép và dán văn bản].
                    <br />
                    ©️ Viết lại văn bản này bằng công thức viết quảng cáo PAS:
                    [sao chép và dán văn bản].
                  </p>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể cho tôi một số mẹo để làm cho bài viết của
                    tôi hấp dẫn và thuyết phục hơn không?”
                    <br /> 2. “Tôi có thể cải thiện tiêu đề của mình như thế nào
                    để chúng thu hút sự chú ý hơn?”
                    <br /> 3. “Bạn có thể giúp tôi đơn giản hóa bài viết của
                    mình và làm cho nó dễ tiếp cận hơn với đối tượng mục tiêu
                    của tôi không?”
                    <br /> 4. “Một số lỗi phổ biến mà tôi nên tránh khi viết
                    quảng cáo là gì?”
                    <br /> 5. “Bạn có thể đề xuất một số công cụ hoặc tài nguyên
                    mà tôi có thể sử dụng để cải thiện kỹ năng viết quảng cáo
                    của mình không?”
                    <br /> 6. “Tôi có thể sử dụng các kỹ thuật kể chuyện như thế
                    nào để khiến bài viết của mình trở nên đáng nhớ hơn?”
                    <br /> 7. “Bạn có thể cung cấp phản hồi về một đoạn nội dung
                    cụ thể mà tôi đã viết và đề xuất cách cải thiện nó không?”
                    <br /> 8. “Làm cách nào tôi có thể sử dụng dữ liệu và nghiên
                    cứu để làm cho nội dung của mình hiệu quả hơn?”
                    <br /> 9. “Bạn có thể giúp tôi tạo lời kêu gọi hành động rõ
                    ràng và hấp dẫn trong nội dung của mình không?”
                    <br /> 10. “Làm cách nào tôi có thể cải thiện phong cách
                    viết của mình để nó hấp dẫn và độc đáo hơn?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎤 Xác định giọng nói thương hiệu độc nhất của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <p>
                    Gợi ý 1: Phân tích văn bản sau để tìm giọng điệu và phong
                    cách. Áp dụng phong cách và giọng điệu chính xác đó cho tất
                    cả các câu trả lời trong tương lai của bạn (dán văn bản)
                    <br /> Gợi ý 2: Thêm vào [hài hước/số liệu thống kê/câu ngắn
                    hơn/câu hỏi/sự khôi hài]. Liệt kê các tính từ bạn sẽ sử dụng
                    để mô tả giọng điệu và phong cách của văn bản này: [sao chép
                    và dán văn bản] Áp dụng chính xác phong cách và giọng điệu
                    đó để viết [dán văn bản mới].
                  </p>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Các đặc điểm chính của phong cách viết này là gì: [sao
                    chép và dán văn bản].”
                    <br />
                    2. “Bạn có thể giúp tôi xác định bất kỳ cụm từ hoặc cách
                    diễn đạt phổ biến nào mà tôi có xu hướng sử dụng trong bài
                    viết của mình không? [sao chép và dán văn bản].”
                    <br />
                    3. “[sao chép và dán văn bản]. Làm thế nào để phong cách
                    viết của tôi so với các nhà văn khác trong lĩnh vực hoặc
                    ngành của tôi?”
                    <br />
                    4. “Bài viết này có xu hướng gợi lên ở người đọc những cảm
                    xúc hay tình cảm gì? [sao chép và dán văn bản].”
                    <br />
                    5. “[sao chép và dán văn bản]. Bạn có thể cung cấp các ví dụ
                    về bài viết của tôi thể hiện giọng điệu và phong cách độc
                    đáo của tôi không?”
                    <br />
                    6. “Một số điểm mạnh và điểm yếu của phong cách viết này là
                    gì và tôi có thể cải thiện như thế nào? [sao chép và dán văn
                    bản].”
                    <br />
                    7. “Làm cách nào tôi có thể điều chỉnh phong cách viết này
                    cho các đối tượng hoặc mục đích khác nhau? [sao chép và dán
                    văn bản].”
                    <br />
                    8. “Những lựa chọn cách viết này (chẳng hạn như cấu trúc
                    câu, từ vựng và giọng điệu) nói gì về tính cách và giá trị
                    của tôi? [sao chép và dán văn bản].”
                    <br />
                    9. “Bạn có thể đề xuất những cách để làm cho văn bản này đặc
                    biệt và dễ nhớ hơn không? [sao chép và dán văn bản].”
                    <br />
                    10. “Làm cách nào tôi có thể đảm bảo rằng phong cách viết
                    này nhất quán trên các loại nội dung và nền tảng khác nhau?
                    [sao chép và dán văn bản].”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>✍️ Các câu lệnh viết quảng cáo nâng cao</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Sử dụng công thức viết quảng cáo PAS, tạo landing page
                    500 từ để thuyết phục người mua tiềm năng mua [sản phẩm]. Sử
                    dụng tính khan hiếm bằng cách nói rằng bạn chỉ còn 3 đơn vị
                    và kèm theo một câu chuyện ngắn về cách một khách hàng
                    chuyển từ [trạng thái a] sang [trạng thái b].
                  </aside>

                  <aside>
                    ©️ Sử dụng khuôn mẫu 5 từ chối cơ bản để viết mô tả sản phẩm
                    cho [sản phẩm] giúp [khách hàng lý tưởng] đạt được [kết quả
                    mơ ước]. Giải quyết những từ chối phổ biến này của một khách
                    hàng tiềm năng: [từ chối 1] [từ chối 2] [từ chối 3] [từ chối
                    4] [từ chối 5] Kết thúc bằng cách liệt kê tất cả các hậu quả
                    tiêu cực của việc không hành động ngay bây giờ.
                  </aside>

                  <aside>
                    ©️ Viết một chuỗi email gồm 5 bước về việc tham dự [sự kiện]
                    sẽ thay đổi cuộc sống của [khách hàng lý tưởng] như thế nào.
                    Bao gồm những lợi ích này: [Lợi ích 1] [Lợi ích 2] [Lợi ích
                    3] Những điểm đau này: [Điểm đau 1] [Điểm đau 2] [Điểm đau
                    3] Và những lời chứng thực này: [Lời chứng thực 1] [Lời
                    chứng thực 2] [Lời chứng thực 3] Tăng dần mức độ khẩn cấp
                    của việc đăng ký tham gia [sự kiện], bắt đầu với rất ít trên
                    email 1 và rất nhiều trên email 5. Trên email 5, hãy đưa ra
                    lời đảm bảo cuối cùng nói rằng nếu họ tham dự, bạn sẽ tặng
                    họ [quà tặng].
                  </aside>

                  <aside>
                    ©️ Sử dụng khuôn mẫu viết quảng cáo AIDA để thu hút sự chú ý
                    của [khách hàng lý tưởng] và thuyết phục họ [kêu gọi hành
                    động]. Bắt đầu bằng một câu hỏi để thu hút sự chú ý của họ,
                    trình bày số liệu thống kê cho thấy mức độ tồi tệ của [vấn
                    đề], nêu 3 lợi ích sau về sản phẩm của chúng tôi [lợi ích
                    1], [lợi ích 2], lợi ích 3] và yêu cầu [kêu gọi hành động].
                  </aside>

                  <aside>
                    ©️ Viết kịch bản hội thảo trên web (webinar) bằng cách sử
                    dụng khuôn mẫu &apos;PASTOR&apos; để giải quyết các vấn đề
                    khó khăn của [khách hàng lý tưởng] và trình bày [sản phẩm]
                    của tôi dưới dạng giải pháp. Xác định vấn đề họ đang gặp
                    phải, khuếch đại hậu quả của việc không giải quyết nó, kể
                    câu chuyện này liên quan đến vấn đề [câu chuyện], bao gồm
                    những lời chứng thực này từ những khách hàng hài lòng [lời
                    chứng thực], trình bày đề nghị của chúng tôi và yêu cầu mua
                    hàng.
                  </aside>

                  <aside>
                    ©️ Viết kịch bản hội thảo trên web (webinar) bằng cách sử
                    dụng công thức hội thảo trên web hoàn hảo (perfect webinar)
                    của Russell Brunson. Quảng cáo chương trình huấn luyện 8
                    tuần về [chủ đề] sẽ giúp [khách hàng lý tưởng] thoát khỏi
                    [điểm đau] và đạt được [lợi ích]. Đề cập rằng một điều để
                    đạt được tất cả ước mơ của họ là [cơ chế độc đáo] và cách
                    duy nhất để tiếp cận nó là [kêu gọi hành động].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📖 Hiệu chỉnh nội dung quảng cáo của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tìm và sửa lỗi chính tả trong văn bản này: [sao chép và
                    dán văn bản].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết nếu có lỗi đánh máy hoặc lỗi ngữ pháp
                    trong văn bản này: [sao chép và dán văn bản].
                  </aside>

                  <aside>
                    ©️ Đọc kiểm lại nội dung này: [sao chép và dán văn bản].
                  </aside>

                  <aside>
                    ©️ Kiểm tra tính xác thực của dữ liệu trong văn bản này:
                    [sao chép và dán văn bản].
                  </aside>

                  <aside>
                    ©️ Đề xuất các nguồn đáng tin cậy để sao lưu các tuyên bố
                    trong văn bản này: [sao chép và dán văn bản].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Xây dựng Online Funnel</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💡 Lên ý tưởng sản phẩm</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Hãy cho tôi [số lượng] ý tưởng sản phẩm mà một [đối
                    tượng] có thể đưa ra cho một [loại hình kinh doanh] để giúp
                    họ [mong muốn của loại hình kinh doanh]
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi một danh sách gồm 4 ý tưởng sản phẩm mà tôi
                    có thể tạo ra nếu như tôi là một [loại hình kinh doanh]
                  </aside>

                  <aside>
                    ©️ Khách hàng của tôi đang gặp khó khăn với [những điểm đau
                    của họ] và họ muốn [mục tiêu mong muốn]. Hãy suy nghĩ ra 10
                    ý tưởng sản phẩm tôi có thể tạo ra để giải quyết vấn đề của
                    họ.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Bạn nghĩ xu hướng lớn nhất của ngành [tên ngành] sẽ
                    là gì trong 5 năm tới?&quot;
                    <br /> 2. &quot;Hãy liệt kê top 5 xu hướng ảnh hưởng đến
                    [loại ngành] hiện nay?&quot;
                    <br /> 3. &quot;Tôi có thể tạo ra những sản phẩm mới nào để
                    phục vụ [thị trường ngách] nếu như tôi là một [loại ngành]?”
                    <br /> 4. &quot;Hãy cho tôi biết [loại ngành] đang phát
                    triển như thế nào?”
                    <br /> 5. &quot;Một [loại hình kinh doanh] có thể tạo ra sản
                    phẩm mới nào để cung cấp cho khách hàng?&quot;
                    <br /> 6. Hãy cho tôi 3 ý tưởng sản phẩm có thể cho một công
                    ty tư vấn giúp chủ nhà hàng tăng doanh thu.
                    <br /> 7. “Hãy cho tôi danh sách 4 ý tưởng sản phẩm mà tôi
                    có thể tạo ra khi kinh doanh dịch vụ giặt thảm.”
                  </p>
                  <h1 className="font-semibold">VÍ DỤ:</h1>
                  <p>
                    {" "}
                    Hãy cho tôi 3 ý tưởng sản phẩm mà một công ty tư vấn có thể
                    đưa ra để giúp chủ nhà hàng tăng doanh thu.
                    <br /> Hãy cho tôi một danh sách gồm 4 ý tưởng sản phẩm mà
                    tôi có thể tạo ra nếu như tôi là một công ty cung cấp dịch
                    vụ vệ sinh sofa.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💥 Lên ý tưởng Online Funnel</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Đề xuất giúp tôi các bước của một phễu bán hàng trực
                    tuyến bán [loại sản phẩm] giá [điểm giá] cho [thị trường
                    ngách]
                  </aside>

                  <aside>
                    ©️ Mô tả cách bán [sản phẩm] bằng cách sử dụng phễu bán hàng
                    trực tuyến
                  </aside>

                  <aside>
                    ©️ Làm thế nào để tôi cải thiện phễu bán hàng này để tăng
                    doanh số: [mô tả phễu bán hàng hiện tại].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH HƯỚNG DẪN:</h1>
                  <p>
                    1. &quot;Bạn có thể giải thích về phễu bán hàng trực tuyến
                    để bán [loại sản phẩm] một cách đơn giản không?&quot;
                    <br />
                    2. &quot;Tôi nên xem xét những gì để bán một [loại sản phẩm]
                    với giá [số tiền] bằng cách sử dụng phễu bán hàng trực
                    tuyến?&quot;
                    <br />
                    3. &quot;Chiến lược nào được sử dụng để bán [sản phẩm] bằng
                    phễu bán hàng trực tuyến?&quot;
                    <br />
                    4. &quot;Các bước cụ thể để bán [sản phẩm] bằng phễu bán
                    hàng trực tuyến là gì?&quot;
                    <br />
                    5. &quot;Phễu bán hàng loại nào sẽ là tốt nhất để bán [sản
                    phẩm]?&quot;
                    <br />
                    6. &quot;Theo bạn, điểm hay nhất của việc sử dụng phễu bán
                    hàng trực tuyến để bán [sản phẩm] là gì?
                    <br />
                    Tùy chọn A: [Loại phễu]
                    <br />
                    Tùy chọn B: [Loại phễu]&quot;
                    <br />
                    7. &quot;Bạn có thể đề xuất ba loại phễu bán hàng trực tuyến
                    khác nhau mà tôi có thể sử dụng để bán [sản phẩm]
                    không?&quot;
                    <br />
                    8. &quot;Bạn có thể cung cấp cho tôi một số ý tưởng phễu bán
                    hàng trực tuyến độc đáo và hiệu quả để bán [sản phẩm] cho
                    [thị trường ngách] không?&quot;
                    <br />
                    9. &quot;Bạn có thể cung cấp cho tôi ba ví dụ về phễu bán
                    hàng trực tuyến phù hợp để bán [sản phẩm] cho [thị trường
                    ngách] không?&quot;
                    <br />
                    10. Đề xuất giúp tôi các bước của một phễu bán hàng trực
                    tuyến bán khoá học giá $2000 cho những nhà bán hàng được
                    chứng nhận bởi FDA trên Amazon.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎯 Chọn thị trường ngách</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Liệt kê 3 đối tượng có tiềm năng quan tâm đến việc mua
                    [sản phẩm].
                  </aside>
                  <aside>
                    ©️ Hãy cho tôi biết những thị trường ngách đang phát triển
                    đối với [loại hình kinh doanh].
                  </aside>
                  <aside>
                    ©️ Tôi muốn bán [sản phẩm]. Nó giúp [mô tả sản phẩm làm gì].
                    Hãy liệt kê cho tôi 10 thị trường tiềm năng có thể cần sản
                    phẩm này.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p></p>1. &quot;Bạn có thể đề xuất 10 ngách phù hợp để bắt đầu
                  công việc kinh doanh mới không?&quot;
                  <br />
                  2. &quot;10 thị trường ngách đang phát triển hàng đầu dành cho
                  các doanh nhân vào năm 2023 là gì?&quot;
                  <br />
                  3. &quot;Tôi đang muốn bắt đầu một công việc kinh doanh mới,
                  đâu là lĩnh vực hứa hẹn nhất hiện nay?&quot;
                  <br />
                  4. &quot;Bạn có thể giúp tôi tìm ra 10 thị trường ngách có lợi
                  nhuận để bắt đầu công việc kinh doanh mới không?&quot;
                  <br />
                  5. &quot;Tôi đang muốn tham gia vào một thị trường mới, 10 thị
                  trường ngách hàng đầu cần xem xét là gì?&quot;
                  <br />
                  6. &quot;10 thị trường ngách chưa được khai thác nhiều nhất để
                  bắt đầu công việc kinh doanh mới vào năm 2023 là gì?&quot;
                  <br />
                  7. &quot;Bạn có thể cung cấp cho tôi danh sách 10 ý tưởng
                  thích hợp cho một cơ hội kinh doanh mới không?&quot;
                  <br />
                  8. &quot;10 lĩnh vực hấp dẫn nhất để bắt đầu kinh doanh mới
                  trong 5 năm tới là gì?&quot;
                  <br />
                  9. &quot;Tôi đang trong giai đoạn đầu bắt đầu một công việc
                  kinh doanh mới, 10 lĩnh vực đang phát triển hiện nay là
                  gì?&quot;
                  <br />
                  10. &quot;Bạn có thể cho tôi 10 ý tưởng thích hợp để bắt đầu
                  một doanh nghiệp mới có tiềm năng tăng trưởng cao không?&quot;
                  <br />
                  11. “3 thị trường ngách tiềm năng để bán sản phẩm chăm sóc da
                  là gì?”
                  <br />
                  12. “Những thị trường ngách đang phát triển dành cho huấn
                  luyện viên trực tuyến là gì?”
                  <br />
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💰 Viết sales page (trang bán hàng)</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Quá trình được chia sẻ bởi Stefan Georgi <br />
                    Câu lệnh đầu tiên: Viết một Bài nhật ký dài 500 từ đầy cảm
                    xúc từ quan điểm của [khách hàng lý tưởng] đang vật lộn với
                    [điểm đau]. Anh ấy cảm thấy [cảm xúc] và muốn [kết quả mơ
                    ước].
                    <br />
                    Câu lệnh thứ hai: Viết lại câu trên nhưng thay
                    &quot;tôi&quot; bằng &quot;bạn&quot;
                    <br />
                    Câu lệnh thứ ba: Sử dụng phần trên để viết một Thư bán hàng
                    [con số] từ nhắm mục tiêu [khách hàng lý tưởng] đang gặp khó
                    khăn với [điểm đau]. Hứa rằng nếu họ tiếp tục đọc, họ sẽ
                    thấy lý do THỰC SỰ khiến họ không thể đạt [kết quả mơ ước]
                    là một thứ gọi là [cơ chế độc nhất]. Cung cấp một sản phẩm
                    có tên [tên sản phẩm] có những lợi ích chính:
                    <br />
                    -[Lợi ích 1]
                    <br />
                    -[Lợi ích 2]
                    <br />
                    -[Lợi ích 3]
                    <br />
                    Cung cấp bảo đảm này [bao gồm bảo đảm] và bao gồm các thông
                    tin này [bao gồm thông tin]
                    <br />
                    Câu lệnh thứ tư: Bao gồm các hướng dẫn tiếp theo như:
                    <br />
                    -Bao gồm thực tế là chúng tôi đã giúp [số người] đạt được
                    [kết quả mơ ước]
                    <br />
                    -Có cảm xúc hơn trong phần giới thiệu
                    <br />
                    -Bao gồm những lời chứng thực này trên trang [dán lời chứng
                    thực]
                    <br />
                    -Sử dụng kể chuyện trước khi đề cập đến giá cả
                    <br />
                    -Bao gồm tiêu đề đề cập đến [điểm đau] và [mong muốn] này
                    <br />
                  </aside>
                  <h1 className="font-semibold">VÍ DỤ:</h1>
                  <p>
                    {" "}
                    Viết một Bài nhật ký dài 500 từ đầy cảm xúc từ quan điểm của
                    một chủ tiệm làm đẹp đang phải vật lộn với tình trạng kiệt
                    sức và làm việc quá nhiều giờ. Cô ấy cảm thấy kiệt sức và
                    muốn mở rộng quy mô kinh doanh của mình trong khi giao công
                    việc cho một nhóm làm việc.
                    <br />
                    Viết lại như trên nhưng thay &quot;tôi&quot; bằng
                    &quot;bạn&quot;.
                    <br />
                    <br />
                    Sử dụng phần trên để viết một Thư bán hàng dài 1000 từ nhắm
                    mục tiêu đến các chủ tiệm làm đẹp đang phải vật lộn với tình
                    trạng kiệt sức sau khi làm việc quá nhiều giờ. Hãy hứa rằng
                    nếu họ tiếp tục đọc, họ sẽ thấy lý do THỰC SỰ khiến họ không
                    thể tăng lợi nhuận và xây dựng đội ngũ là thứ được gọi là
                    “Định giá thấp”. Cung cấp sản phẩm có tên “Bứt phá đằng sau
                    chiếc ghế” với những lợi ích chính:
                    <br />- Định giá như salon cao cấp
                    <br />- Thu hút khách hàng cao cấp
                    <br />- Làm việc 4h/tuần
                    <br />
                    Đảm bảo rằng nếu họ không kiếm được 20000 đô la trong 6
                    tháng, bạn sẽ cho họ 3 tháng huấn luyện miễn phí và đề cập
                    rằng người hướng dẫn đã giúp 200 chủ tiệm đạt được 7 con số
                    trong khi làm việc 4 giờ mỗi tuần.
                    <br />- Kết quả (không bao gồm lời chứng thực, nút, tiểu sử
                    hoặc ngăn xếp giá trị):
                    <br /> **Bí quyết Tối đa lợi nhuận, tối thiểu giờ làm cho
                    ngành Salon: Chương trình 6 tháng giúp xây dựng Salon 7 con
                    số khi chỉ làm việc 4 giờ mỗi tuần**
                    <br /> Xin chào các chủ Salon,
                    <br />
                    Hãy đọc hết lời tâm sự của tôi dưới đây nếu bạn luôn tỉnh
                    dậy vào một ngày cảm thấy hoàn toàn kiệt sức sau những giờ
                    làm việc không ngừng nghỉ và hy sinh thời gian với người
                    thân chỉ để duy trì công việc của mình. Bạn mệt mỏi, nhưng
                    bạn biết rằng bạn cần làm gì đó để tăng lợi nhuận và xây
                    dựng một đội ngũ để giảm bớt gánh nặng.
                    <br />
                    Tuy nhiên, cho dù bạn cố gắng đến đâu, dường như bạn vẫn
                    không thể tiến lên được. Bạn đang bị mắc kẹt trong một vòng
                    lặp các giờ làm việc dài và căng thẳng quá độ, không thể
                    thấy được lối thoát. Đây là một câu chuyện quá quen thuộc
                    đối với nhiều chủ Salon, và trước đây đó cũng là câu chuyện
                    của tôi. Nhưng nếu tôi nói với bạn rằng lý do thực sự khiến
                    bạn không thể tăng lợi nhuận và xây dựng một đội ngũ là do
                    một thứ gọi là &quot;Định giá thấp&quot;? Là một chủ Salon
                    trước đây đã vật lộn với kiệt sức giống như bạn, tôi hiểu rõ
                    cảm giác bực bội khi bạn cảm thấy mình đang bị mắc kẹt trong
                    vòng lặp vất vả không có kết quả. Nhưng điều tôi khám phá
                    sau nhiều năm vật lộn đó là chìa khóa thành công trong ngành
                    Salon là giá cả của dịch vụ của tôi phải được định giá như
                    một Salon sang trọng. Đó là lý do tại sao tôi đã tạo ra
                    &quot;Bí quyết Tối đa lợi nhuận, tối thiểu giờ làm cho ngành
                    Salon&quot; - một chương trình được thiết kế đặc biệt để
                    giúp các chủ Salon như bạn định giá dịch vụ của họ như một
                    Salon hạng sang,thu hút khách hàng cao cấp và chỉ làm việc 4
                    giờ mỗi tuần. Tôi không chỉ áp dụng những nguyên tắc này để
                    phát triển salon thành công của riêng mình, mà tôi còn đã
                    giúp hơn 200 chủ salon khác đạt được mức doanh thu 7 số
                    lượng chữ số khi chỉ làm việc 4 giờ mỗi tuần. Và tôi hoàn
                    toàn tự tin tôi có làm điều tương tự cho tiệm Salon của bạn.
                    Tôi rất hiểu rằng để có thể thành công trong ngành Salon,
                    bạn cần phải đảm nhận nhiều vị trí khác nhau - từ quản lý
                    nhân viên, tìm kiếm khách hàng mới đến việc thực hiện dịch
                    vụ cho khách hàng. Điều này dễ dàng dẫn đến tình trạng bạn
                    phải làm việc suốt ngày, suốt đêm, thậm chí không có thời
                    gian nghỉ ngơi cùng gia đình và bạn bè. Tuy nhiên, nếu bạn
                    muốn thay đổi hoàn cảnh và đạt được lợi nhuận cao đồng thời
                    chỉ làm việc 4 giờ mỗi tuần, thì chương trình &quot;Bí quyết
                    Tối đa lợi nhuận, tối thiểu giờ làm cho ngành Salon&quot;
                    chính là điều bạn cần tìm kiếm. Với chương trình này, bạn sẽ
                    được học cách thiết lập giá cả cao hơn và thu hút khách hàng
                    cao cấp, giúp bạn đạt được lợi nhuận lớn hơn với ít công sức
                    hơn. Bạn cũng sẽ học được cách tạo ra một đội ngũ tài năng
                    và chuyên nghiệp để chia sẻ khối lượng công việc và giảm áp
                    lực cho bản thân. Tôi cam đoan rằng chương trình này sẽ mang
                    lại cho bạn những kết quả tốt nhất trong vòng 6 tháng tới,
                    và nếu không thể đạt được số tiền 20,000 USD như đã cam kết,
                    tôi sẽ tặng bạn 3 tháng tư vấn miễn phí. Hãy để chúng tôi
                    giúp bạn tạo ra một chiến lược đúng đắn để phát triển ngành
                    Salon của mình và đạt được mục tiêu của bạn. Hãy liên hệ với
                    chúng tôi để biết thêm chi tiết và bắt đầu hành trình thành
                    công của bạn ngay hôm nay!
                    <br />
                    Trân trọng,
                    <br />
                    [Tên của bạn]
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  📄 Viết landing page (cho Opt-ins hoặc đăng ký Webinar)
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một landing page cung cấp [tên mồi thu hút] cho
                    [khán giả]. [sách điện tử/hội thảo trên web/loạt video] miễn
                    phí này sẽ giúp họ:
                    <br />
                    -[Lợi ích 1]
                    <br />
                    -[Lợi ích 2]
                    <br />
                    -[Lợi ích 3]
                    <br />
                    Đề cập rằng nó hoàn toàn miễn phí và tôi có thể giúp họ vì
                    [bao gồm thông tin xác thực].
                  </aside>

                  <aside>
                    ©️ Bạn có thể giúp tôi tạo landing page cho [sản phẩm/dịch
                    vụ] của mình để chuyển đổi khách truy cập thành khách hàng
                    không? Dưới đây là một số thông tin chi tiết về [sản
                    phẩm/dịch vụ] của tôi: [điền thông tin chi tiết như lợi ích,
                    điểm bán hàng độc đáo, đối tượng mục tiêu, v.v.].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Tôi cần một landing page có thể giúp tôi tạo thêm
                    khách hàng tiềm năng cho doanh nghiệp của mình. Bạn có thể
                    giúp tôi tạo một trang đích làm nổi bật các tính năng và lợi
                    ích chính của sản phẩm/dịch vụ của tôi không?&quot;
                    <br />
                    2. &quot;Tôi sắp tung ra một sản phẩm mới và tôi cần một
                    trang đích có thể thu hút sự chú ý của khách hàng tiềm năng.
                    Bạn có thể giúp tôi tạo một trang đích bắt mắt và dễ điều
                    hướng không?&quot;
                    <br />
                    3. &quot;Tôi muốn quảng bá sự kiện sắp tới của mình và tôi
                    cần một landing page có thể giúp tôi bán vé. Bạn có thể giúp
                    tôi tạo một trang bao gồm tất cả thông tin cần thiết và
                    khuyến khích khách truy cập đăng ký không?&quot;
                    <br />
                    4. &quot;Tôi cần một landing page có thể giới thiệu porfolio
                    và dịch vụ của tôi với tư cách là một người làm việc tự do.
                    Bạn có thể giúp tôi tạo một trang nêu bật các kỹ năng của
                    tôi và khuyến khích khách hàng tiềm năng liên hệ
                    không?&quot;
                    <br />
                    5. &quot;Tôi muốn tạo một landing page cho sách điện tử của
                    mình và tôi cần nó đủ thuyết phục để chuyển đổi khách truy
                    cập thành khách hàng. Bạn có thể giúp tôi tạo một trang bao
                    gồm lời kêu gọi hành động rõ ràng và nêu bật những lợi ích
                    chính của cuốn sách của tôi?&quot;
                    <br />
                    6. &quot;Tôi cần một landing page có thể thuyết phục khách
                    truy cập đăng ký dùng thử miễn phí. Bạn có thể giúp tôi tạo
                    một trang làm nổi bật các tính năng độc đáo của sản phẩm và
                    thuyết phục khách truy cập hành động không?&quot;
                    <br />
                    7. &quot;Tôi đang tìm cách tăng doanh thu cho cửa hàng
                    thương mại điện tử của mình và tôi cần một landing page có
                    thể giúp tôi chuyển đổi khách truy cập thành khách hàng. Bạn
                    có thể giúp tôi tạo một trang đích hấp dẫn trực quan và bao
                    gồm các mô tả sản phẩm thuyết phục không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🛒 Viết nội dung Order Bump</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ [Sản phẩm hoặc dịch vụ] của chúng tôi là giải pháp hoàn
                    hảo cho [điểm đau] mà nhiều khách hàng của chúng tôi đang
                    phải đối mặt. Nó cung cấp [lợi ích 1], [lợi ích 2] và [lợi
                    ích 3] khiến nó trở thành thứ bắt buộc phải có đối với [đối
                    tượng mục tiêu X]. Vui lòng viết một văn bản 100 từ làm nổi
                    bật sản phẩm/dịch vụ và khuyến khích khách hàng hành động
                    (dùng sự khẩn cấp).
                  </aside>

                  <aside>
                    ©️ Viết 3 phiên bản của một văn bản 200 từ thuyết phục khách
                    hàng tiềm năng mua [loại sản phẩm] với những lợi ích sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3]
                    <br />
                    Đảm bảo nhấn mạnh rằng đây là cơ hội duy nhất để có được sản
                    phẩm này ở mức giá [price point] và bao gồm lời kêu gọi hành
                    động có nội dung [call to action].
                  </aside>

                  <aside>
                    ©️ Viết một trang đích ngắn cung cấp [sản phẩm] cho [thị
                    trường]. Đề cập rằng đây là lần duy nhất họ thấy sản phẩm
                    này được giảm giá [số phần trăm]%.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết nội dung bán hàng cho sản phẩm mới của
                    tôi, [tên sản phẩm], và [mô tả sản phẩm] không? Đối tượng
                    mục tiêu là [mô tả về khách hàng lý tưởng].”
                    <br />
                    2. “Tôi cần nội dung bán hàng cho khóa học trực tuyến của
                    mình về [chủ đề khóa học]. Bạn có thể viết nội dung nói về
                    [mô tả đối tượng mục tiêu] và nêu bật những lợi ích của việc
                    tham gia khóa học không?”
                    <br />
                    3. “Tôi đang tung ra một dòng [danh mục sản phẩm] mới. Bạn
                    có thể viết nội dung bán hàng thu hút [mô tả đối tượng mục
                    tiêu] và nhấn mạnh [điểm bán hàng độc nhất] của sản phẩm
                    không?”
                    <br />
                    4. “Bạn có thể viết nội dung bán hàng cho trang web thương
                    mại điện tử bán [danh mục sản phẩm] của tôi không? Đối tượng
                    mục tiêu là [mô tả về khách hàng lý tưởng], những người đánh
                    giá cao [điểm bán hàng độc đáo của sản phẩm].”
                    <br />
                    5. “Tôi cần bản sao bán hàng cho các dịch vụ huấn luyện của
                    mình để giúp [đối tượng mục tiêu] đạt được [mục tiêu]. Bạn
                    có thể viết nội dung nói chuyện với những cá nhân [điểm đau
                    của đối tượng mục tiêu] và muốn [kết quả mong muốn của dịch
                    vụ huấn luyện] không?”
                    <br />
                    6. “Tôi đang tung ra một ứng dụng mới giúp mọi người quản lý
                    [lĩnh vực có vấn đề] của họ. Bạn có thể viết nội dung bán
                    hàng nói lên những cá nhân đang gặp khó khăn với [lĩnh vực
                    có vấn đề] và muốn [kết quả mong muốn của ứng dụng] không?”
                    <br />
                    7. “Bạn có thể viết nội dung bán hàng cho cuốn sách mới của
                    tôi về [chủ đề sách] được không? Độc giả mục tiêu là [mô tả
                    về người đọc lý tưởng], những người muốn [kết quả mong muốn
                    của cuốn sách].”
                    <br />
                    8. “Tôi cần bài quảng cáo bán hàng cho công ty du lịch
                    chuyên về [loại hình du lịch]. Bạn có thể viết nội dung thu
                    hút khách du lịch muốn [kết quả mong muốn của trải nghiệm du
                    lịch] và trải nghiệm [điểm bán hàng độc nhất của đại lý]
                    không?”
                    <br />
                    9. “Bạn có thể viết nội dung bán hàng cho cửa hàng trực
                    tuyến bán [danh mục sản phẩm] của tôi không? Đối tượng mục
                    tiêu là những cá nhân muốn ưu tiên [đề xuất giá trị của sản
                    phẩm] và đam mê [điểm bán hàng độc đáo của sản phẩm].”
                    <br />
                    10. “Tôi đang tung ra một dịch vụ mới giúp [đối tượng mục
                    tiêu] cải thiện [lĩnh vực có vấn đề] của họ. Bạn có thể viết
                    nội dung bán hàng nói chuyện với các doanh nhân muốn [kết
                    quả mong muốn của dịch vụ] và nổi bật trong [mô tả thị
                    trường] không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔺 Viết nội dung trang Upsell</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một trang bán hàng [đếm từ] bắt đầu bằng câu
                    &quot;Đợi đã! Đơn hàng của bạn chưa hoàn tất.&quot; Và sau
                    đó sử dụng ngôn ngữ thuyết phục để tạo cảm giác cấp bách
                    xung quanh việc mua một sản phẩm có tên [tên sản phẩm], có
                    những lợi ích sau:
                    <br />
                    1. [Lợi ích 1]
                    <br />
                    2. [Lợi ích 2]
                    <br />
                    3. [Lợi ích 3]
                    <br />
                    Đề cập rằng người đọc sẽ có thể nhận [lời hứa], hoặc họ sẽ
                    được [đảm bảo].
                  </aside>

                  <aside>
                    ©️ Viết một trang bán hàng dài 300 từ giới thiệu [sản phẩm
                    của bạn] và mô tả những lợi ích chính này [lợi ích 1], [lợi
                    ích 2], [lợi ích 3]. Giới thiệu cách sản phẩm này sẽ giúp
                    đối tượng, là [ngách], đạt được [kết quả cuối cùng]. Giải
                    quyết những điểm đau này mà đối tượng mục tiêu đang gặp phải
                    [điểm đau 1], [điểm khó 2], [điểm khó 3] và giải thích cách
                    sản phẩm này có thể giúp giải quyết chúng.
                    <br />
                    Sử dụng những lời chứng thực này để xây dựng uy tín và chứng
                    minh tính hiệu quả của sản phẩm:
                    <br />
                    [Lời chứng thực 1]
                    <br />
                    [Lời chứng thực 2]
                    <br />
                    [Lời chứng thực 3]
                    <br />
                    Tạo cảm giác cấp bách bằng cách làm nổi bật [khẩn cấp] và
                    [khan hiếm] đó
                    <br />
                    Sử dụng ngôn ngữ và định dạng rõ ràng, ngắn gọn để làm cho
                    trang bán hàng của bạn dễ đọc và dễ điều hướng.
                    <br />
                    Kết thúc bằng cách thúc giục khách hàng tiềm năng thực hiện
                    hành động và mua hàng, đồng thời củng cố những lợi ích và
                    giá trị chính của sản phẩm.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết nội dung bán hàng cho sản phẩm mới của
                    tôi, [tên sản phẩm], là [mô tả sản phẩm] không? Đối tượng
                    mục tiêu là [mô tả về khách hàng lý tưởng].”
                    <br />
                    2. “Tôi cần nội dung bán hàng cho khóa học trực tuyến của
                    mình về [chủ đề khóa học]. Bạn có thể viết nội dung nói về
                    [mô tả đối tượng mục tiêu] và nêu bật những lợi ích của việc
                    tham gia khóa học không?”
                    <br />
                    3. “Tôi đang tung ra một dòng [danh mục sản phẩm] mới. Bạn
                    có thể viết nội dung bán hàng thu hút [mô tả đối tượng mục
                    tiêu] và nhấn mạnh [điểm bán hàng độc nhất] của sản phẩm
                    không?”
                    <br />
                    4. “Bạn có thể viết nội dung bán hàng cho trang web thương
                    mại điện tử bán [danh mục sản phẩm] của tôi không? Đối tượng
                    mục tiêu là [mô tả về khách hàng lý tưởng], những người đánh
                    giá cao [điểm bán hàng độc đáo của sản phẩm].”
                    <br />
                    5. “Tôi cần nội dung bán hàng cho các dịch vụ huấn luyện của
                    mình để giúp [đối tượng mục tiêu] đạt được [mục tiêu]. Bạn
                    có thể viết nội dung nói chuyện với những cá nhân [điểm đau
                    của đối tượng mục tiêu] và muốn [kết quả mong muốn của dịch
                    vụ huấn luyện] không?”
                    <br />
                    6. “Tôi đang tung ra một ứng dụng mới giúp mọi người quản lý
                    [vấn đề] của họ. Bạn có thể viết nội dung bán hàng nói lên
                    những cá nhân đang gặp khó khăn với [vấn đề] và muốn [kết
                    quả mong muốn của ứng dụng] không?”
                    <br />
                    7. “Bạn có thể viết nội dung bán hàng cho cuốn sách mới của
                    tôi về [chủ đề sách] được không? Độc giả mục tiêu là [mô tả
                    về người đọc lý tưởng], những người muốn [kết quả mong muốn
                    của cuốn sách].”
                    <br />
                    8. “Tôi cần bản quảng cáo bán hàng cho công ty du lịch
                    chuyên về [loại hình du lịch]. Bạn có thể viết nội dung thu
                    hút khách du lịch muốn [kết quả mong muốn của trải nghiệm du
                    lịch] và trải nghiệm [điểm bán hàng độc nhất của đại lý]
                    không?”
                    <br />
                    9. “Bạn có thể viết nội dung bán hàng cho cửa hàng trực
                    tuyến bán [danh mục sản phẩm] của tôi không? Đối tượng mục
                    tiêu là những cá nhân muốn ưu tiên [đề xuất giá trị của sản
                    phẩm] và đam mê [điểm bán hàng độc đáo của sản phẩm].”
                    <br />
                    10. “Tôi đang tung ra một dịch vụ mới giúp [đối tượng mục
                    tiêu] cải thiện [vấn đề] của họ. Bạn có thể viết nội dung
                    bán hàng nói chuyện với các doanh nhân muốn [kết quả mong
                    muốn của dịch vụ] và nổi bật trong [mô tả thị trường]
                    không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🙏 Viết nội dung trang cảm ơn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một landing page thuyết phục [số] từ cung cấp [sản
                    phẩm] có tên [tên sản phẩm] giúp [khán giả] [lợi ích] [ưu
                    đãi]. Bắt đầu bằng cách nói &quot;Cảm ơn, tài nguyên miễn
                    phí của bạn đang được cung cấp.&quot;
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết một trang [điền vào chỗ trống] cho buổi
                    ra mắt sản phẩm mới của tôi không? Chúng tôi muốn cảm ơn
                    khách hàng vì sự hỗ trợ của họ và khuyến khích họ chia sẻ
                    trải nghiệm của mình với những người khác.”
                    <br />
                    2. “Tôi cần một trang [điền vào chỗ trống] cho tổ chức phi
                    lợi nhuận của mình. Bạn có thể viết một nội dung bày tỏ lòng
                    biết ơn của chúng tôi đối với các khoản đóng góp và khuyến
                    khích mọi người tiếp tục ủng hộ sự nghiệp của chúng tôi
                    không?
                    <br />
                    3. “Bạn có thể viết một trang [điền vào chỗ trống] cho trang
                    web thương mại điện tử của tôi được không? Chúng tôi muốn
                    cảm ơn khách hàng đã mua hàng và giảm giá đặc biệt cho đơn
                    hàng tiếp theo của họ.”
                    <br />
                    4. “Tôi đang tổ chức một sự kiện [điền vào chỗ trống] và cần
                    một trang cảm ơn dành cho những người tham dự. Bạn có thể
                    viết nội dung thể hiện sự đánh giá cao của chúng tôi đối với
                    sự tham gia của họ và cung cấp thông tin về các sự kiện sắp
                    tới không?”
                    <br />
                    5. “Bạn có thể viết một trang [điền vào chỗ trống] cho khóa
                    học trực tuyến của tôi được không? Chúng tôi muốn cảm ơn các
                    sinh viên đã đăng ký và cung cấp cho họ các nguồn lực bổ
                    sung để hỗ trợ việc học tập của họ.”
                    <br />
                    6. “Tôi cần một trang [điền vào chỗ trống] cho dịch vụ huấn
                    luyện của mình. Bạn có thể viết nội dung cảm ơn khách hàng
                    vì cam kết của họ đối với sự phát triển cá nhân và cung cấp
                    thông tin về các phiên trong tương lai không?”
                    <br />
                    7. “Bạn có thể viết một trang [điền vào chỗ trống] cho hội
                    nghị kinh doanh của tôi được không? Chúng tôi muốn cảm ơn
                    những người tham dự vì sự tham gia của họ và khuyến khích họ
                    tiếp tục kết nối với các chuyên gia đồng nghiệp.”
                    <br />
                    8. “Tôi đang tung ra một dòng sản phẩm mới và cần một trang
                    [điền vào chỗ trống] cho khách hàng. Bạn có thể viết nội
                    dung cảm ơn họ đã dùng thử sản phẩm của chúng tôi và cung
                    cấp thông tin về các bản phát hành mới không?”
                    <br />
                    9. “Bạn có thể viết một trang [điền vào chỗ trống] cho phòng
                    tập thể hình của tôi được không? Chúng tôi muốn cảm ơn các
                    thành viên của mình vì sự cống hiến của họ cho hành trình
                    chăm sóc sức khỏe và thể chất của họ, đồng thời mang đến cho
                    họ một chương trình khuyến mãi đặc biệt.”
                    <br />
                    10. “Tôi cần một trang [điền vào chỗ trống] cho nhà hàng của
                    mình. Bạn có thể viết lời cảm ơn khách hàng đã dùng bữa với
                    chúng tôi và khuyến khích họ để lại đánh giá hoặc theo dõi
                    chúng tôi trên mạng xã hội không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Bộ Công Cụ Kinh Doanh</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💪 Nghiên cứu đối thủ cạnh tranh của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Đây là tên của các đối thủ cạnh tranh hàng đầu của tôi
                    trong [ngành]: [đối thủ 1], [đối thủ 2] và [đối thủ 3]. Tạo
                    ra một phân tích về điểm mạnh, điểm yếu và định vị thị
                    trường của họ.
                  </aside>

                  <aside>
                    ©️ Đây là danh sách các sản phẩm hoặc dịch vụ chính được
                    cung cấp bởi các đối thủ cạnh tranh hàng đầu của tôi. [Sản
                    phẩm 1] của [Công ty 1], [Sản phẩm 2] của [Công ty 2]. Phân
                    tích giá cả, tính năng và chiến lược tiếp thị của họ để hiểu
                    rõ hơn về vị thế cạnh tranh của họ.
                  </aside>

                  <aside>
                    ©️ Vui lòng cung cấp danh sách các kênh tiếp thị được các
                    đối thủ cạnh tranh hàng đầu của tôi sử dụng. Phân tích các
                    chiến lược nhắn tin, nhắm mục tiêu và thu hút khách hàng của
                    họ để xác định các lĩnh vực cần cải thiện và đạt được lợi
                    thế cạnh tranh.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Ai là đối thủ cạnh tranh chính của tôi trong
                    [ngành/ngách] và họ so sánh như thế nào với [công ty/sản
                    phẩm của tôi]?&quot;
                    <br />
                    2. &quot;[Điểm mạnh/điểm yếu] của đối thủ cạnh tranh của tôi
                    là gì và tôi có thể sử dụng thông tin này như thế nào để đạt
                    được lợi thế cạnh tranh?&quot;
                    <br />
                    3. &quot;Đối thủ cạnh tranh của tôi cung cấp loại [sản
                    phẩm/dịch vụ] nào và so sánh họ với [công ty/sản phẩm] của
                    tôi như thế nào?&quot;
                    <br />
                    4. &quot;Đối thủ cạnh tranh của tôi sử dụng loại [chiến lược
                    giá] nào và so sánh họ với [công ty/sản phẩm] của tôi như
                    thế nào?&quot;
                    <br />
                    5. &quot;Đối thủ cạnh tranh của tôi sử dụng loại [chiến lược
                    tiếp thị] nào và chúng hiệu quả như thế nào trong việc [tạo
                    khách hàng tiềm năng/thu hút khách hàng]?&quot;
                    <br />
                    6. &quot;Đối thủ cạnh tranh của tôi xuất bản loại [nội dung]
                    nào và làm cách nào tôi có thể tạo nội dung tốt hơn để cạnh
                    tranh với họ?&quot;
                    <br />
                    7. &quot;Các đối thủ cạnh tranh của tôi có loại [sự hiện
                    diện trên mạng xã hội] nào và làm cách nào tôi có thể tận
                    dụng mạng xã hội để cạnh tranh với họ?&quot;
                    <br />
                    8. &quot;Đối thủ cạnh tranh của tôi cung cấp loại [dịch
                    vụ/hỗ trợ khách hàng] nào và tôi có thể cải thiện dịch vụ/hỗ
                    trợ khách hàng của mình như thế nào để cạnh tranh với
                    họ?&quot;
                    <br />
                    9. &quot;Đối thủ cạnh tranh của tôi sử dụng loại [chiến lược
                    SEO] nào và tôi có thể cải thiện SEO của mình như thế nào để
                    cạnh tranh với họ?&quot;
                    <br />
                    10. &quot;Các đối thủ cạnh tranh của tôi có loại [quan hệ
                    đối tác/cộng tác] nào và làm cách nào tôi có thể thiết lập
                    các mối quan hệ tương tự để đạt được lợi thế cạnh
                    tranh?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📝 Khởi tạo kế hoạch kinh doanh</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một kế hoạch kinh doanh cho doanh nghiệp của tôi có
                    tên là [tên công ty] bán [sản phẩm] cho [ngách] và muốn đạt
                    được [mục tiêu].
                  </aside>

                  <aside>
                    ©️ Viết một kế hoạch kinh doanh cho doanh nghiệp của tôi có
                    tên là [tên công ty] bán [sản phẩm] cho [ngách] và muốn đạt
                    được [mục tiêu]. Bao gồm một bản tóm tắt điều hành, các tính
                    toán tài chính về chi phí dự kiến, doanh thu và lợi nhuận
                    cũng như sứ mệnh và tầm nhìn của công ty. Sử dụng một tông
                    giọng trang trọng và số liệu thống kê.
                  </aside>

                  <aside>
                    ©️ Tôi muốn đạt được [mục tiêu] với công ty của mình và tôi
                    yêu cầu các mục tiêu hiệu suất cho nhóm của mình. Vui lòng
                    viết phác thảo về các mốc quan trọng hàng quý và vai trò
                    chịu trách nhiệm cho từng cột mốc quan trọng.
                  </aside>

                  <aside>
                    ©️ Viết một danh sách các mục tiêu cụ thể, có thể đo lường
                    và có thể đạt được cho [công ty hoặc dự án] bằng cách sử
                    dụng mô hình OKR.
                  </aside>

                  <aside>
                    ©️ Biến tầm nhìn này thành mục tiêu SMART: [chèn tầm nhìn].
                    Bao gồm các kết quả và sản phẩm bàn giao quan trọng nhất.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. Ý tưởng kinh doanh của tôi là gì? Tôi sẽ cung cấp những
                    sản phẩm hoặc dịch vụ nào và chúng sẽ khác biệt hoặc độc đáo
                    như thế nào so với các đối thủ cạnh tranh?
                    <br />
                    2. Thị trường mục tiêu của tôi là ai? Nhu cầu và điểm khó
                    khăn của họ là gì và các sản phẩm hoặc dịch vụ của tôi sẽ
                    giải quyết chúng như thế nào?
                    <br />
                    3. Chiến lược tiếp thị và bán hàng của tôi là gì? Tôi sẽ
                    tiếp cận và tương tác với đối tượng mục tiêu của mình như
                    thế nào và tôi sẽ sử dụng những kênh hoặc chiến thuật nào để
                    quảng bá doanh nghiệp của mình?
                    <br />
                    4. Tôi sẽ cấu trúc và tổ chức doanh nghiệp của mình như thế
                    nào? Tôi sẽ sử dụng cấu trúc pháp lý nào, và tôi sẽ quản lý
                    tài chính và vận hành như thế nào?
                    <br />
                    5. Dự đoán và mục tiêu tài chính của tôi là gì? Tôi dự kiến
                    sẽ tạo ra bao nhiêu doanh thu trong năm đầu tiên và tôi sẽ
                    đầu tư như thế nào vào tăng trưởng và mở rộng theo thời
                    gian?
                    <br />
                    6. Những rủi ro và thách thức chính mà doanh nghiệp của tôi
                    có thể gặp phải là gì và tôi sẽ giảm thiểu hoặc giải quyết
                    chúng như thế nào?
                    <br />
                    7. Ai là thành viên chủ chốt trong nhóm của tôi, họ sẽ có
                    vai trò và trách nhiệm gì? Tôi sẽ tuyển dụng và giữ chân
                    những nhân viên tài năng như thế nào khi doanh nghiệp phát
                    triển?
                    <br />
                    8. Mục tiêu ngắn hạn và dài hạn của tôi đối với doanh nghiệp
                    là gì và tôi sẽ đánh giá tiến độ và sự thành công như thế
                    nào?
                    <br />
                    9. Làm cách nào để duy trì tính cạnh tranh và thích ứng với
                    những thay đổi của thị trường hoặc ngành theo thời gian? Tôi
                    sẽ sử dụng những chiến lược nào để đổi mới và luôn dẫn đầu?
                    <br />
                    10. Tôi sẽ cấp vốn cho doanh nghiệp và quản lý dòng tiền như
                    thế nào? Tôi sẽ sử dụng những nguồn tài chính hoặc đầu tư
                    nào, và tôi sẽ lập ngân sách và quản lý chi phí như thế nào?
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🚇 Viết Proposals cho khách hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết Proposal cho [khách hàng tiềm năng] của tôi, người
                    đang vật lộn với [điểm đau]. Đây là những dịch vụ mà tôi
                    cung cấp [liệt kê dịch vụ]. Đưa ra proposal [mô tả giọng
                    điệu].
                  </aside>

                  <aside>
                    ©️ Viết Proposal cho [khách hàng] tiềm năng của tôi, người
                    đang gặp khó khăn với [điểm đau]. Đây là những dịch vụ mà
                    tôi cung cấp [liệt kê dịch vụ]. Đây là [giá cả] và [thời
                    gian] bàn giao được đề xuất của tôi. Đưa ra proposal [mô tả
                    giọng điệu].
                  </aside>

                  <aside>
                    ©️ Tôi đang giới thiệu một dự án cho [điền tên công ty/tổ
                    chức] và cần viết một proposal. Dự án tập trung vào [chèn
                    phạm vi dự án]. Các sản phẩm bàn giao chính và thời gian cho
                    dự án là gì? Làm thế nào tôi đảm bảo rằng dự án đáp ứng nhu
                    cầu của họ? Viết một proposal ngắn gọn và thuyết phục.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Làm thế nào [các dịch vụ] có thể giúp doanh nghiệp khách
                    hàng trong [ngành] đạt được các mục đích và mục tiêu của
                    mình?”
                    <br />
                    2. “Làm thế nào để một doanh nghiệp trong [ngành] có thể nổi
                    bật so với các đối thủ cạnh tranh?”
                    <br />
                    3. “Làm thế nào chúng ta có thể giúp [loại hình doanh
                    nghiệp] cải thiện hiệu quả và năng suất của một doanh nghiệp
                    khác?”
                    <br />
                    4. “Một [Loại hình kinh doanh] có thể cung cấp những giải
                    pháp nào để giải quyết bất kỳ khó khăn hoặc thách thức hiện
                    tại trên thị trường?”
                    <br />
                    5. “Làm thế nào [loại hình kinh doanh] có thể hỗ trợ khách
                    hàng mở rộng cơ sở khách hàng và tiếp cận thị trường mới?”
                    <br />
                    6. Một [loại hình kinh doanh] có thể thực hiện những bước
                    nào để cải thiện sự hài lòng và lòng trung thành của khách
                    hàng?”
                    <br />
                    7. “Làm thế nào [loại hình dịch vụ] của chúng tôi có thể đi
                    trước các xu hướng và đổi mới của ngành?”
                    <br />
                    8. “Làm thế nào [loại ngành] có thể chứng minh ROI và tiềm
                    năng tác động của các dịch vụ của mình đối với khách hàng?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>👀 Tuyên bố Tầm nhìn Công ty</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo một tuyên bố về tầm nhìn của công ty bao gồm Giới
                    thiệu: Tầm nhìn của chúng tôi là [chèn tuyên bố tầm nhìn của
                    bạn, chẳng hạn như &apos;thay đổi thế giới&apos;, &apos;đột
                    phá ngành&apos; hoặc &apos;biến đổi cuộc sống&apos;]. Giá
                    trị: Chúng tôi tin vào [chèn giá trị đầu tiên của bạn, chẳng
                    hạn như &apos;đổi mới&apos;, &apos;xuất sắc&apos; hoặc
                    &apos;chính trực&apos;], [chèn giá trị thứ hai của bạn] và
                    [chèn giá trị thứ ba của bạn]. Những giá trị này hướng dẫn
                    các hành động và quyết định của chúng ta khi chúng ta hướng
                    tới tầm nhìn của mình. Kêu gọi hành động: Hãy tham gia cùng
                    chúng tôi khi chúng tôi làm việc để [chèn tuyên bố tầm nhìn
                    của bạn vào hành động, chẳng hạn như &apos;tạo ra một tương
                    lai tốt đẹp hơn&apos;, &apos;truyền cảm hứng cho sự thay
                    đổi&apos; hoặc &apos;tạo sự khác biệt&apos;]. Thông tin liên
                    hệ: Liên hệ với chúng tôi bằng [chèn phương thức liên hệ ưa
                    thích của bạn, chẳng hạn như điện thoại, email hoặc trò
                    chuyện] tại [chèn địa chỉ email hoặc số điện thoại của bạn]
                    nếu bạn muốn tìm hiểu thêm. Lời chào kết: Trân trọng, [điền
                    tên của bạn].
                  </aside>

                  <aside>
                    ©️ Tôi đang pitching một dự án cho [điền tên công ty/tổ
                    chức] và cần viết một proposal. Dự án tập trung vào [chèn
                    phạm vi dự án]. Các sản phẩm bàn giao chính và thời gian cho
                    dự án là gì? Làm thế nào tôi sẽ đảm bảo rằng dự án đáp ứng
                    nhu cầu của họ? Viết một đề xuất ngắn gọn và thuyết phục.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Tạo ra một tuyên bố về tầm nhìn gói gọn mục đích và
                    đường hướng cho công ty của tôi.&quot;
                    <br /> 2. &quot;Hãy brainstorm một số ý tưởng cho tuyên bố
                    tầm nhìn cho công ty của tôi.&quot;
                    <br /> 3. &quot;Tôi muốn công ty của mình có tác động như
                    thế nào đối với thế giới?&quot;
                    <br /> 4. &quot;Tôi muốn công ty của mình thể hiện những giá
                    trị nào?&quot;
                    <br /> 5. &quot;Tôi muốn tạo ra loại văn hóa nào trong công
                    ty của mình?&quot;
                    <br /> 6. &quot;Tôi muốn thu hút kiểu khách hàng nào đến với
                    công ty của mình?&quot;
                    <br /> 7. &quot;Tôi muốn công ty của mình để lại di sản
                    gì?&quot;
                    <br /> 8. &quot;Hoàn thiện tuyên bố về tầm nhìn của tôi bằng
                    cách nhập các gợi ý cụ thể hơn liên quan đến mục tiêu, giá
                    trị và đối tượng của công ty tôi.&quot;
                    <br /> 9. &quot;So sánh và đối chiếu các phiên bản khác nhau
                    về tuyên bố tầm nhìn của tôi để xem cái nào gây được tiếng
                    vang lớn nhất.&quot;
                    <br /> 10. &quot;Nhận phản hồi về tuyên bố tầm nhìn của tôi
                    bằng cách nhập nó vào Chat GPT để đánh giá sự rõ ràng, ngắn
                    gọn và hiệu quả tổng thể của nó.&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💡 Tạo ý tưởng kinh doanh</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể đề xuất một số ý tưởng kinh doanh hiện đang
                    có nhu cầu cao không?”
                    <br />
                    2. “Bạn có thể đề xuất một số ý tưởng kinh doanh hiện đang
                    có nhu cầu ở [chèn ngành hoặc quốc gia] không?”
                    <br />
                    3. “Tôi đang tìm những ý tưởng kinh doanh với mức yêu cầu
                    vốn đầu tư tối thiểu. Bạn có thể đề xuất cho tôi
                    không?&quot;
                    <br />
                    4. “Một số ý tưởng kinh doanh sáng tạo và độc đáo là gì?”
                    <br />
                    5. “Tôi điều hành loại hình kinh doanh này [mô tả công việc
                    kinh doanh]. Tôi có thể cung cấp cho khách hàng những sản
                    phẩm và dịch vụ mới nào?”
                    <br />
                    6. “Bạn có thể đề xuất một số ý tưởng kinh doanh cho một
                    công ty khởi nghiệp với nguồn lực hạn chế không?”
                    <br />
                    7. “Tôi quan tâm đến việc bắt đầu kinh doanh trong [chèn
                    ngành]. Bạn có ý tưởng gì cho tôi không?
                    <br />
                    8. “Một số ý tưởng kinh doanh có tiềm năng phát triển cao là
                    gì?”
                    <br />
                    9. “Tôi thích [điền đam mê và sở thích]. Tôi có thể tạo ra
                    loại hình kinh doanh nào?”
                    <br />
                    10. “Tôi giỏi [chèn kỹ năng và kinh nghiệm]. Tôi có thể tạo
                    ra loại hình kinh doanh nào?”
                    <br />
                    11. “Tôi đang tìm ý tưởng kinh doanh thân thiện với môi
                    trường. Bạn có thể giúp tôi không?&quot;
                    <br />
                    12. “Tôi đang tìm ý tưởng kinh doanh mà tôi có thể làm tại
                    nhà. Bạn có thể giúp tôi không?&quot;
                    <br />
                    13. “Bạn có thể đề xuất một số ý tưởng kinh doanh cho một
                    thị trấn nhỏ hoặc khu vực nông thôn không?”
                    <br />
                    14. “Tôi quan tâm đến việc bắt đầu kinh doanh trong [điền
                    ngách]. Bạn có ý tưởng gì cho tôi?
                    <br />
                    15. “Bạn có thể giới thiệu một số ý tưởng kinh doanh phù hợp
                    cho người mới bắt đầu không?”
                    <br />
                    16. “Tôi muốn bắt đầu kinh doanh trong [chèn ngành] nhưng
                    tôi không biết bắt đầu từ đâu. Bạn có ý tường gì không?”
                    <br />
                    17. “Một số ý tưởng kinh doanh dễ mở rộng quy mô là gì?”
                    <br />
                    18. “Bạn có thể đề xuất một số ý tưởng kinh doanh phổ biến
                    với [chèn thị trường mục tiêu] không?”
                    <br />
                    19. “Tôi đang tìm ý tưởng kinh doanh có tác động xã hội. Bạn
                    có đề nghị gì?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💼 Chuẩn bị để thuyết phục nhà đầu tư</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <p>
                    Bạn có thể sử dụng ChatGPT để nhập vai vào các tình huống và
                    hoàn thiện phần thuyết phục của mình. Dưới đây là 10 ví dụ
                    về cách bạn có thể viết câu lệnh theo kịch bản và yêu cầu
                    phản hồi về phần thuyết phục của mình.
                  </p>
                  <h1 className="font-semibold">CÂU LỆNH THEO KỊCH BẢN:</h1>
                  <p>
                    1. Hãy tưởng tượng bạn đang mời một nhà đầu tư cho một ứng
                    dụng di động mới giúp mọi người theo dõi lượng nước uống
                    hàng ngày của họ. Giải thích vấn đề mà ứng dụng giải quyết
                    và đối tượng mục tiêu của ứng dụng.
                    <br />
                    2. Bạn đang mời một nhà đầu tư cho dòng thời trang mới thân
                    thiện với môi trường. Mô tả các tính năng độc đáo của quần
                    áo và cách chúng mang lại lợi ích cho môi trường, đồng thời
                    chia sẻ kế hoạch tiếp thị và phân phối của bạn.
                    <br />
                    3. Hãy tưởng tượng bạn đang chào mời một nhà đầu tư về một
                    nền tảng phần mềm mới tự động hóa quy trình tài khoản phải
                    trả cho các doanh nghiệp nhỏ. Giải thích những điểm yếu mà
                    phần mềm giải quyết và cách nó tiết kiệm thời gian và tiền
                    bạc cho chủ doanh nghiệp.
                    <br />
                    4. Bạn đang thuyết phục một nhà đầu tư về một sản phẩm thay
                    thế thịt dựa trên thực vật mới. Mô tả lợi ích dinh dưỡng của
                    sản phẩm và cách nó so sánh với thịt truyền thống về hương
                    vị và thành phần, đồng thời chia sẻ kế hoạch sản xuất và
                    phân phối của bạn.
                    <br />
                    5. Hãy tưởng tượng bạn đang mời một nhà đầu tư cho một nền
                    tảng y tế từ xa mới kết nối bệnh nhân với các nhà cung cấp
                    dịch vụ chăm sóc sức khỏe thông qua trò chuyện video. Mô tả
                    vấn đề mà nền tảng giải quyết và cách nó mang lại lợi ích
                    cho bệnh nhân và nhà cung cấp, đồng thời chia sẻ kế hoạch
                    tiếp thị và nhân rộng nền tảng của bạn.
                    <br />
                    6. Bạn đang chào mời một nhà đầu tư cho một dịch vụ mới giúp
                    mọi người tìm được nhà ở giá rẻ ở các thành phố có chi phí
                    cao. Giải thích vấn đề mà dịch vụ giải quyết và đối tượng
                    mục tiêu của dịch vụ, đồng thời chia sẻ các kế hoạch về
                    doanh thu và tăng trưởng của bạn.
                    <br />
                    7. Hãy tưởng tượng bạn đang mời một nhà đầu tư cho một nền
                    tảng truyền thông xã hội mới ưu tiên quyền riêng tư và bảo
                    mật dữ liệu của người dùng. Mô tả các tính năng của nền tảng
                    khiến nền tảng này khác biệt với các nền tảng truyền thông
                    xã hội khác và chia sẻ kế hoạch thu hút người dùng và kiếm
                    tiền của bạn.
                    <br />
                    8. Bạn đang mời một nhà đầu tư cho một nền tảng thương mại
                    điện tử mới kết nối người tiêu dùng với các nghệ nhân và thợ
                    thủ công địa phương. Giải thích vấn đề mà nền tảng giải
                    quyết và cách nó mang lại lợi ích cho cả người tiêu dùng và
                    nghệ nhân, đồng thời chia sẻ kế hoạch tiếp thị và mở rộng
                    của bạn.
                    <br />
                    9. Hãy tưởng tượng bạn đang chào mời một nhà đầu tư cho một
                    thị trường trực tuyến mới dành cho hàng tiêu dùng bền vững
                    và có đạo đức. Mô tả các tính năng độc đáo của thị trường và
                    cách nó mang lại lợi ích cho cả người tiêu dùng và nhà sản
                    xuất, đồng thời chia sẻ kế hoạch phát triển và tác động của
                    bạn.
                    <br />
                    10. Bạn đang giới thiệu một nhà đầu tư cho một nền tảng dựa
                    trên blockchain mới giúp các doanh nghiệp nhỏ tiếp cận nguồn
                    tài chính từ mạng lưới các nhà đầu tư toàn cầu. Giải thích
                    vấn đề mà nền tảng giải quyết và cách nó mang lại lợi ích
                    cho các doanh nghiệp nhỏ và nhà đầu tư, đồng thời chia sẻ kế
                    hoạch của bạn để mở rộng nền tảng.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>👑 Tuyển dụng và lãnh đạo</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH HƯỚNG DẪN:</h1>
                  <aside>
                    ©️ Làm cách nào tôi có thể tạo một thông báo được cá nhân
                    hóa việc tuyển dụng mới cho [vai trò] nêu bật những điểm
                    mạnh và đóng góp độc đáo của họ cho nhóm [Loại công ty],
                    đồng thời khiến họ cảm thấy được trân trọng và hỗ trợ trong
                    vai trò mới của mình?
                  </aside>

                  <aside>
                    ©️ Đâu sẽ là một thông điệp hay để chào mừng nhân viên mới
                    được tuyển dụng vào nhóm [chi tiết công ty] và cung cấp cho
                    họ cái nhìn tổng quan ngắn gọn về văn hóa, giá trị và mục
                    tiêu của công ty chúng ta?
                  </aside>

                  <aside>
                    ©️ Làm thế nào tôi có thể tạo trải nghiệm giới thiệu thú vị
                    và hấp dẫn cho nhân viên mới trong [loại công ty], bao gồm
                    cơ hội để họ làm quen với đồng nghiệp, làm quen với văn hóa
                    công ty của chúng tôi và hiểu vai trò cũng như trách nhiệm
                    của họ trong [vai trò]?
                  </aside>

                  <aside>
                    ©️ Làm thế nào để tôi có thể tạo thông báo tuyển dụng mới
                    cho [vai trò], thể hiện cam kết của [loại công ty] của chúng
                    tôi đối với sự đa dạng, công bằng và hòa nhập, đồng thời
                    khiến họ cảm thấy được chào đón và đánh giá cao với tư cách
                    là thành viên trong nhóm của chúng tôi?
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Hãy tưởng tượng bạn đang thuê một đại diện dịch vụ khách
                    hàng mới. Một số kỹ năng và phẩm chất chính mà bạn sẽ tìm
                    kiếm ở một ứng viên là gì? Bạn sẽ hỏi những câu hỏi nào để
                    đánh giá khả năng của họ trong việc xử lý các yêu cầu của
                    khách hàng và giải quyết các vấn đề?”
                    <br />
                    2. “Bạn đang thuê một nhà phát triển phần mềm mới. Những kỹ
                    năng kỹ thuật và kinh nghiệm nào là quan trọng đối với vị
                    trí này? Bạn sẽ hỏi những câu hỏi nào để đánh giá khả năng
                    coding và kỹ năng giải quyết vấn đề của họ?”
                    <br />
                    3. “Hãy tưởng tượng bạn đang thuê một giám đốc tiếp thị mới.
                    Kinh nghiệm và trình độ nào là cần thiết cho vai trò này?
                    Bạn sẽ hỏi những câu hỏi nào để đánh giá sự hiểu biết của họ
                    về thị trường mục tiêu của bạn và khả năng phát triển các
                    chiến lược tiếp thị hiệu quả của họ?”
                    <br />
                    4. “Bạn đang thuê một đại diện bán hàng mới. Bạn sẽ tìm kiếm
                    những đặc điểm và phẩm chất nào ở ứng viên cho vị trí này?
                    Bạn sẽ hỏi những câu hỏi nào để đánh giá kỹ năng giao tiếp
                    và thuyết phục của họ, cũng như khả năng đáp ứng các mục
                    tiêu bán hàng?”
                    <br />
                    5. “Hãy tưởng tượng bạn đang thuê một giám đốc nhân sự mới.
                    Kinh nghiệm và trình độ nào là cần thiết cho vai trò này?
                    Bạn sẽ hỏi những câu hỏi nào để đánh giá sự hiểu biết của họ
                    về các phương pháp hay nhất về nhân sự và khả năng quản lý
                    quan hệ nhân viên của họ?”
                    <br />
                    6. “Bạn đang thuê một nhân viên kế toán mới. Những kỹ năng
                    kỹ thuật và kinh nghiệm nào là quan trọng đối với vị trí
                    này? Bạn sẽ hỏi những câu hỏi nào để đánh giá kiến thức về
                    các nguyên tắc kế toán và khả năng phân tích báo cáo tài
                    chính của họ?”
                    <br />
                    7. “Hãy tưởng tượng bạn đang thuê một người thiết kế đồ họa
                    mới. Kinh nghiệm và trình độ nào là cần thiết cho vai trò
                    này? Bạn sẽ hỏi những câu hỏi nào để đánh giá khả năng sáng
                    tạo và khả năng cộng tác của họ với các thành viên khác
                    trong nhóm?”
                    <br />
                    8. “Bạn đang thuê một người quản lý dự án mới. Bạn sẽ tìm
                    kiếm những đặc điểm và phẩm chất nào ở ứng viên cho vị trí
                    này? Bạn sẽ hỏi những câu hỏi nào để đánh giá kỹ năng lãnh
                    đạo và tổ chức của họ, cũng như khả năng quản lý thời hạn và
                    ngân sách?”
                    <br />
                    9. “Hãy tưởng tượng bạn đang thuê một trợ lý hành chính mới.
                    Những kỹ năng và phẩm chất nào là quan trọng cho vai trò
                    này? Bạn sẽ hỏi những câu hỏi nào để đánh giá khả năng tổ
                    chức và khả năng xử lý nhiều nhiệm vụ và ưu tiên của họ?”
                    <br />
                    10. “Bạn đang thuê một nhà phân tích dữ liệu mới. Những kỹ
                    năng kỹ thuật và kinh nghiệm nào là quan trọng đối với vị
                    trí này? Bạn sẽ hỏi những câu hỏi nào để đánh giá khả năng
                    phân tích và giải thích dữ liệu của họ, cũng như kinh nghiệm
                    của họ với các công cụ và kỹ thuật trực quan hóa dữ liệu?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🤝 Viết tóm tắt cuộc họp</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tóm tắt 5 điểm chính từ các ghi chú cuộc họp này: [sao
                    chép và dán ghi chú].
                  </aside>

                  <aside>
                    ©️ Tóm tắt các quyết định đã đưa ra và các bước tiếp theo
                    được nêu trong các ghi chú cuộc họp này: [sao chép và dán
                    các ghi chú].
                  </aside>

                  <aside>
                    ©️ Tóm tắt các điểm chính được nêu ra, các giải pháp được đề
                    xuất và các bộ phận chịu trách nhiệm trong các ghi chú cuộc
                    họp này: [sao chép và dán ghi chú].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể vui lòng tóm tắt những điểm chính được thảo
                    luận trong cuộc họp hôm nay không? [sao chép và dán bản ghi
                    cuộc họp].”
                    <br />
                    2. “Tôi sẽ đánh giá cao nếu bạn có thể cung cấp một bản tóm
                    tắt ngắn gọn về cuộc họp mà chúng ta vừa có. [sao chép và
                    dán bản ghi cuộc họp].”
                    <br />
                    3. “Bạn có thể viết một bản tóm tắt về cuộc họp này mà chúng
                    ta đã có trước đó không? Tôi muốn đảm bảo rằng mình không bỏ
                    lỡ điều gì quan trọng: [sao chép và dán bản ghi cuộc họp].”
                    <br />
                    4. “Vui lòng tóm tắt những điểm chính rút ra từ cuộc họp
                    này: [sao chép và dán bản ghi cuộc họp].”
                    <br />
                    5. “Bạn có thể tập hợp một bản tóm tắt cuộc họp mà tôi có
                    thể chia sẻ với các bên liên quan khác không? Đây là bản ghi
                    chép: [sao chép và dán bản ghi cuộc họp].”
                    <br />
                    6. “Tôi cần gửi email tiếp theo tới tất cả những người tham
                    dự cuộc họp này [sao chép và dán bản ghi chép]. Bạn có thể
                    viết một bản tóm tắt mà tôi có thể gửi kèm trong email
                    không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Dịch Vụ Khách Hàng</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  🎉 Phát triển một danh sách các câu hỏi thường gặp (FAQs) cho
                  khách hàng
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Lập danh sách các câu hỏi thường gặp và câu trả lời từ
                    khách hàng của một [loại hình kinh doanh]. Viết phần Câu hỏi
                    thường gặp về điều đó.
                  </aside>

                  <aside>
                    ©️ Tạo một phần Câu hỏi thường gặp để giải quyết những quan
                    niệm sai lầm phổ biến về [chủ đề]. Hãy đảm bảo rằng nó trích
                    dẫn các tạp chí có thẩm quyền và giải quyết mọi nhầm lẫn cho
                    khách hàng.
                  </aside>

                  <aside>
                    ©️ Viết một danh sách các câu hỏi thường gặp và câu trả lời
                    sẽ cung cấp thông tin hữu ích cho khách hàng của tôi.
                  </aside>

                  <aside>
                    ©️ Viết Câu hỏi thường gặp cho trang web của tôi để giúp
                    [khách hàng lý tưởng] hiểu rõ hơn về [sản phẩm]. Đảm bảo bao
                    gồm [câu hỏi thường gặp].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể phân tích phản hồi và đánh giá của khách hàng
                    để xác định những câu hỏi thường gặp nhất không?”
                    <br />
                    2. “Làm cách nào tôi có thể cấu trúc văn bản Câu hỏi thường
                    gặp để giúp khách hàng dễ đọc và điều hướng?”
                    <br />
                    3. “Bạn có thể đề xuất một phần giới thiệu giúp tạo âm hưởng
                    cho Câu hỏi thường gặp và cung cấp ngữ cảnh cho các câu hỏi
                    và câu trả lời không?”
                    <br />
                    4. “Làm cách nào tôi có thể viết câu trả lời rõ ràng và súc
                    tích cho những câu hỏi phổ biến nhất của khách hàng?”
                    <br />
                    5. “Một số chiến lược cho việc dự đoán và trả lời các câu
                    hỏi mà khách hàng thậm chí có thể không biết để hỏi là gì?”
                    <br />
                    6. “Làm cách nào tôi có thể sử dụng định dạng (chẳng hạn như
                    tiêu đề, dấu đầu dòng và văn bản in đậm) để làm cho Câu hỏi
                    thường gặp dễ thu hút và hấp dẫn hơn?”
                    <br />
                    7. “Bạn có thể đề xuất các cách kết hợp thương hiệu và tính
                    cá nhân vào Câu hỏi thường gặp để làm cho nó gắn kết hơn với
                    phần còn lại của trang web hoặc sản phẩm của tôi không?”
                    <br />
                    8. “Làm cách nào tôi có thể đảm bảo rằng các câu trả lời
                    trong Câu hỏi thường gặp là chính xác và cập nhật?”
                    <br />
                    9. “Bạn có thể cung cấp các ví dụ về Câu hỏi thường gặp được
                    viết tốt từ các công ty hoặc trang web khác không?”
                    <br />
                    10. “Một số phương pháp hay nhất để thử nghiệm và tối ưu hóa
                    Câu hỏi thường gặp để làm cho câu hỏi này trở nên hữu ích
                    nhất có thể cho khách hàng?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🗣️ Quản lý việc giao tiếp với khách hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết lại email này cho khách hàng với giọng điệu chuyên
                    nghiệp và ấm áp hơn: [sao chép và dán nội dung].
                  </aside>

                  <aside>
                    ©️ Một khách hàng đang phàn nàn về [vấn đề]. Viết email để
                    phản hồi thể hiện rằng tôi hiểu họ và sẽ làm mọi cách để
                    giúp họ giải quyết vấn đề này.
                  </aside>

                  <aside>
                    ©️ Tạo một mẫu để giải quyết các câu hỏi và mối quan tâm phổ
                    biến về [vấn đề hoặc giải pháp].
                  </aside>

                  <aside>
                    ©️ Bạn có thể giúp tôi viết một email xác nhận [vấn đề], xin
                    lỗi và đưa ra giải pháp khắc phục không?
                  </aside>

                  <aside>
                    ©️ Một số cách hiệu quả để trả lời khiếu nại của khách hàng
                    trong email là gì? Khiếu nại của khách hàng nói: [vấn đề].
                    Bắt đầu trả lời bằng cách giới thiệu tôi, cảm ơn khách hàng
                    đã gửi email và giải quyết yêu cầu của họ.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Làm cách nào để mở email chăm sóc khách hàng một cách
                    chuyên nghiệp và thân thiện?”
                    <br />
                    2. “Bạn có thể đề xuất một số cách để thừa nhận và đồng cảm
                    với vấn đề hoặc mối quan tâm của khách hàng không?”
                    <br />
                    3. “Một số phương pháp hay nhất để giải thích rõ ràng và
                    chính xác các bước mà khách hàng cần thực hiện để giải quyết
                    vấn đề là gì?”
                    <br />
                    4. “Bạn có thể cung cấp một số ví dụ về ngôn ngữ mà tôi có
                    thể sử dụng để bày tỏ sự đánh giá cao đối với hoạt động kinh
                    doanh của khách hàng không?”
                    <br />
                    5. “Làm cách nào tôi có thể đảm bảo rằng giọng điệu của
                    email phù hợp với tiếng nói và giá trị thương hiệu của công
                    ty tôi?”
                    <br />
                    6. “Bạn có thể đề xuất một số cách để cung cấp trợ giúp hoặc
                    hỗ trợ bổ sung ngoài phản hồi email ban đầu không?”
                    <br />
                    7. “Một số chiến lược sử dụng ngôn ngữ để trấn an khách hàng
                    rằng vấn đề của họ đang được xem xét nghiêm túc và sẽ tìm ra
                    giải pháp?”
                    <br />
                    8. “Làm cách nào để tôi có thể truyền đạt một cách hiệu quả
                    bất kỳ hạn chế hoặc ràng buộc nào có thể ảnh hưởng đến khả
                    năng nhận được kết quả mà họ mong muốn của khách hàng?”
                    <br />
                    9. “Bạn có thể giúp tôi chỉnh sửa và đọc lại email của mình
                    để đảm bảo nó không có lỗi ngữ pháp và lỗi đánh máy không?”
                    <br />
                    10. “Làm thế nào tôi có thể kết thúc email theo cách khiến
                    khách hàng cảm thấy hài lòng và được đánh giá cao, đồng thời
                    khuyến khích họ liên hệ với tôi nếu họ cần hỗ trợ thêm?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  👩‍💻 Trả lời nhận xét từ khách hàng tiềm năng hoặc người ganh
                  ghét
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một câu trả lời ấm áp cho một khách hàng tiềm năng
                    muốn biết [sản phẩm] hoạt động như thế nào.
                  </aside>

                  <aside>
                    ©️ Mô tả lợi ích của [sản phẩm] bằng từ ngữ đơn giản cho
                    khách hàng tiềm năng.
                  </aside>

                  <aside>
                    ©️ Liệt kê 10 cách tôi có thể trả lời câu hỏi này về [sản
                    phẩm]: [nhập câu hỏi]
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết phản hồi cho một khách hàng không hài
                    lòng với sản phẩm/dịch vụ của chúng ta và muốn được hoàn lại
                    tiền không?”
                    <br />
                    2. “Tôi cần phản hồi cho một khách hàng có thắc mắc về chính
                    sách vận chuyển của chúng tôi. Bạn có thể giúp tôi
                    không?&quot;
                    <br />
                    3. “Bạn có thể viết một phản hồi lịch sự cho một khách hàng
                    đã để lại đánh giá tiêu cực trên trang web của chúng tôi
                    không?”
                    <br />
                    4. “Tôi cần phản hồi cho một khách hàng quan tâm đến việc
                    mua một trong những sản phẩm của chúng tôi nhưng có một số
                    câu hỏi về sản phẩm đó. Bạn có thể viết một câu trả lời đầy
                    đủ thông tin không?”
                    <br />
                    5. “Bạn có thể viết phản hồi cho một khách hàng đang gặp sự
                    cố kỹ thuật với trang web/ứng dụng của chúng tôi và cần hỗ
                    trợ không?”
                    <br />
                    6. “Tôi cần phản hồi cho một khách hàng quan tâm đến dịch vụ
                    của chúng tôi nhưng muốn biết thêm thông tin trước khi đưa
                    ra quyết định. Bạn có thể viết một câu trả lời thuyết phục
                    không?”
                    <br />
                    7. “Bạn có thể viết phản hồi cho một khách hàng đang gặp sự
                    cố khi truy cập tài khoản của họ trên nền tảng của chúng tôi
                    không?”
                    <br />
                    8. “Tôi cần phản hồi cho một khách hàng đã cung cấp phản hồi
                    về sản phẩm/dịch vụ của chúng tôi và có một số đề xuất để
                    cải thiện. Bạn có thể viết một câu trả lời chuyên nghiệp
                    không?
                    <br />
                    9. “Bạn có thể viết phản hồi cho khách hàng đã gửi yêu cầu
                    hỗ trợ và đang chờ giải pháp cho vấn đề của họ không?”
                    <br />
                    10. “Tôi cần phản hồi cho một khách hàng đang thắc mắc về
                    chính sách hoàn trả của công ty chúng tôi. Bạn có thể viết
                    một câu trả lời rõ ràng và súc tích không?”
                    <br />
                    11. “Bạn có thể giúp tôi soạn thảo câu trả lời cho một khách
                    hàng đang hỏi về [điền sản phẩm/dịch vụ] của chúng tôi
                    không?”
                    <br />
                    12. “Tôi cần một câu trả lời lịch sự nhưng đầy đủ thông tin
                    cho một khách hàng đang gặp rắc rối với [điền vào tính năng]
                    của chúng tôi. Bạn có thể viết một cái cho tôi không?
                    <br />
                    13. “Bạn có thể tạo phản hồi thân thiện cho một khách hàng
                    đang để lại đánh giá tích cực cho [điền sản phẩm/dịch vụ]
                    của chúng tôi không?”
                    <br />
                    14. “Tôi cần một phản hồi chuyên nghiệp và đồng cảm với một
                    khách hàng đang bày tỏ sự không hài lòng với [điền vào sản
                    phẩm/dịch vụ] của chúng tôi. Bạn có thể giúp tôi tạo ra một
                    bản không?
                    <br />
                    15. “Bạn có thể viết phản hồi cho một khách hàng đang yêu
                    cầu hoàn lại tiền cho [điền sản phẩm/dịch vụ] của chúng tôi
                    không? Nó cần phải có nhiều thông tin và lịch sự.”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🌈 Tăng tỷ lệ giữ chân khách hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Hãy tưởng tượng bạn là khách hàng của doanh nghiệp của
                    chính bạn. Điều gì sẽ khiến bạn muốn tiếp tục sử dụng sản
                    phẩm hoặc dịch vụ của mình?”
                    <br />
                    2. “Một số lý do khiến khách hàng có thể ngừng sử dụng sản
                    phẩm hoặc dịch vụ của tôi là gì? Tôi có thể làm gì để giải
                    quyết những vấn đề này và giữ chân khách hàng?”
                    <br />
                    3. &quot;Có bất kỳ chương trình khách hàng thân thiết hoặc
                    phần thưởng nào mà tôi có thể cung cấp để khuyến khích khách
                    hàng tiếp tục sử dụng sản phẩm hoặc dịch vụ của tôi không?
                    Phần thưởng hoặc lợi ích nào sẽ hấp dẫn nhất đối với đối
                    tượng mục tiêu của tôi?&quot;
                    <br />
                    4. “Tôi có thể cung cấp trải nghiệm được cá nhân hóa hoặc
                    tùy chỉnh cho khách hàng để tăng mức độ tương tác của họ với
                    thương hiệu của tôi không? Loại cá nhân hóa nào sẽ hiệu quả
                    nhất và tôi có thể triển khai chúng như thế nào?”
                    <br />
                    5. “Có bất kỳ lĩnh vực nào trong sản phẩm hoặc dịch vụ của
                    tôi có thể được cải thiện để tăng sự hài lòng và giữ chân
                    khách hàng không? Tôi có thể thực hiện những bước nào để
                    thực hiện những cải tiến này và truyền đạt chúng tới khách
                    hàng của mình?”
                    <br />
                    6. “Tôi có thể cung cấp thêm tài nguyên hoặc hỗ trợ để giúp
                    khách hàng tận dụng tối đa sản phẩm hoặc dịch vụ của tôi
                    không? Loại tài nguyên hoặc hỗ trợ nào sẽ có giá trị nhất
                    đối với khách hàng của tôi và làm cách nào để tôi có thể dễ
                    dàng truy cập chúng?”
                    <br />
                    7. “Tôi có thể triển khai chương trình giới thiệu để khuyến
                    khích khách hàng hiện tại giới thiệu khách hàng mới cho
                    doanh nghiệp của mình không? Phần thưởng hoặc lợi ích nào sẽ
                    hiệu quả nhất và làm cách nào để tôi có thể quảng bá chương
                    trình tới các khách hàng hiện tại của mình?”
                    <br />
                    8. “Có bất kỳ tính năng xã hội hoặc hướng đến cộng đồng nào
                    mà tôi có thể thêm vào sản phẩm hoặc dịch vụ của mình để
                    tăng mức độ tương tác và giữ chân khách hàng không? Loại
                    tính năng nào sẽ hiệu quả nhất và làm cách nào tôi có thể
                    khuyến khích khách hàng sử dụng chúng?”
                    <br />
                    9. “Tôi có thể cung cấp nội dung độc quyền hoặc quyền truy
                    cập cho những khách hàng đã đồng hành cùng doanh nghiệp của
                    tôi trong một khoảng thời gian nhất định không? Loại nội
                    dung hoặc quyền truy cập nào sẽ hấp dẫn nhất đối với khách
                    hàng của tôi và làm cách nào để tôi có thể phân phối nội
                    dung đó theo cách vừa có giá trị vừa hấp dẫn?”
                    <br />
                    10. “Có bất kỳ kênh liên lạc hoặc điểm tiếp xúc nào mà tôi
                    có thể cải thiện tương tác của mình với khách hàng không?
                    Tôi có thể thực hiện những bước nào để cải thiện những tương
                    tác này và làm cho chúng trở nên cá nhân hóa và hiệu quả
                    hơn?”
                    <br />
                    11. “Tôi có thể hợp tác với các doanh nghiệp hoặc tổ chức
                    khác để cung cấp thêm lợi ích hoặc phần thưởng cho khách
                    hàng của mình không? Loại quan hệ đối tác nào sẽ có giá trị
                    nhất đối với khách hàng của tôi và làm cách nào tôi có thể
                    tận dụng những mối quan hệ đối tác này để tăng tỷ lệ giữ
                    chân khách hàng?”
                    <br />
                    12. “Bạn có thể đề xuất các chiến lược để cải thiện khả năng
                    giữ chân khách hàng cho [điền loại hình kinh doanh] của tôi
                    không?
                    <br />
                    13. “Tôi đang tìm ý tưởng để tăng lòng trung thành của khách
                    hàng đối với [điền vào sản phẩm/dịch vụ] của mình. Bạn có
                    thể giúp tôi brainstorm không?
                    <br />
                    14. “Tôi muốn cải thiện khả năng giữ chân khách hàng cho
                    [điền loại hình kinh doanh] của mình. Bạn có thể cung cấp
                    cho tôi một số ý tưởng không?
                    <br />
                    15. “Bạn có thể nghĩ ra cách để tăng hoạt động kinh doanh
                    lặp lại cho [điền sản phẩm/dịch vụ] của tôi không?”
                    <br />
                    16. “Tôi đang tìm kiếm các đề xuất về cách cải thiện khả
                    năng giữ chân khách hàng và giảm tình trạng rời bỏ công ty
                    [điền vào ngành] của mình. Bạn có thể giúp tôi được không?”
                    <br />
                    17. “Bạn có thể nghĩ ra các chiến lược duy trì cho [điền
                    loại hình kinh doanh] của tôi để khiến khách hàng quay lại
                    không?”
                    <br />
                    18. “Tôi cần một số ý tưởng về cách tăng lòng trung thành
                    của khách hàng đối với [điền vào sản phẩm/dịch vụ] của mình.
                    Bạn có thể giúp tôi với đó?&quot;
                    <br />
                    19. “Bạn có thể đề xuất các cách để giữ khách hàng tương tác
                    và trung thành với doanh nghiệp [điền vào ngành] của tôi
                    không?”
                    <br />
                    20. “Tôi đang tìm ý tưởng sáng tạo để cải thiện khả năng giữ
                    chân khách hàng cho [điền loại hình kinh doanh] của mình.
                    Bạn có thể cung cấp cho tôi một số tùy chọn không?
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔎 Khảo sát khách hàng của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Hãy cho tôi 10 câu hỏi mà tôi có thể sử dụng để khảo sát
                    khách hàng của mình và đánh giá mức độ hài lòng của họ.
                  </aside>

                  <aside>
                    ©️ Cung cấp 20 ví dụ về câu hỏi mở để đưa vào khảo sát khách
                    hàng cho [loại công ty].
                  </aside>

                  <aside>
                    ©️ Liệt kê các số liệu quan trọng nhất cần theo dõi trong
                    cuộc khảo sát khách hàng để tăng sự hài lòng và giữ chân
                    khách hàng.
                  </aside>

                  <aside>
                    ©️ Động não 20 câu hỏi mà tôi có thể hỏi khách hàng của mình
                    để xem họ cần những sản phẩm nào khác.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Affiliate Marketing</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>✍️ Viết review cho sản phẩm Affiliate</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết bài đánh giá về [sản phẩm] so sánh với các sản phẩm
                    khác trong danh mục về giá cả, tính năng và chất lượng.
                  </aside>

                  <aside>
                    ©️ Viết một bài đánh giá ngắn về [sản phẩm] từ một [khách
                    hàng lý tưởng] vừa mua nó và rất hào hứng với kết quả.
                  </aside>

                  <aside>
                    ©️ Viết những gì có thể thích và không thích về [sản phẩm]
                    và tại sao? Viết bình luận dựa trên thông tin đó.
                  </aside>

                  <aside>
                    ©️ Viết một bài đánh giá ngắn về [sản phẩm] từ một khách
                    hàng giới thiệu nó cho bạn bè của anh ấy qua cuộc trò chuyện
                    WhatsApp. Đề cập đến [lợi ích 1], [lợi ích 2] và [lợi ích
                    3]. Sử dụng ngôn ngữ đàm thoại và không chính thức.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📑 Tạo bảng so sánh sản phẩm Affiliate</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết bài đánh giá về cách [sản phẩm] so sánh với các sản
                    phẩm khác trong danh mục về chất lượng, tính năng và giá cả.
                  </aside>

                  <aside>
                    ©️ 10 ưu điểm của [sản phẩm 1] so với [sản phẩm 2] là gì?
                  </aside>

                  <aside>
                    ©️ Cung cấp đánh giá toàn diện về [sản phẩm], bao gồm các
                    tính năng, hiệu suất và giá trị có xứng với giá tiền.?
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 10 lý do tại sao [khách hàng lý tưởng]
                    sẽ mua [sản phẩm 1] thay vì [sản phẩm 2].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>↗️ Tạo đề xuất sản phẩm Affiliates</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết kịch bản cho một video trên YouTube nói về cách [sản
                    phẩm] đã giúp tôi [được lợi ích].
                  </aside>

                  <aside>
                    ©️ Viết một bài đăng trên blog nói về cách [sản phẩm] đã
                    giúp tôi [lợi ích]. Đề cập đến số liệu thống kê.
                  </aside>

                  <aside>
                    ©️ Viết một bài đăng [nền tảng] nói về cách [sản phẩm] đã
                    giúp tôi [lợi ích]. Đề cập đến số liệu thống kê và lời chứng
                    thực này: [bao gồm lời chứng thực].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🖋️ Viết mô tả sản phẩm Affiliate</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết mô tả hấp dẫn về [sản phẩm] cho [đối tượng].
                  </aside>

                  <aside>
                    ©️ Viết mô tả hấp dẫn về [sản phẩm] cho [đối tượng]. Đề cập
                    đến những lợi ích này:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3].
                  </aside>

                  <aside>
                    ©️ Viết mô tả sản phẩm cho một [sản phẩm] nhấn mạnh các điểm
                    bán hàng độc đáo của nó và phân biệt nó với các sản phẩm
                    tương tự trên thị trường.
                  </aside>

                  <aside>
                    ©️ Viết mô tả sản phẩm ngắn gọn và hấp dẫn cho [sản phẩm] sẽ
                    thu hút sự chú ý của [khách hàng lý tưởng] trong 3 dòng đầu
                    tiên.
                  </aside>

                  <aside>
                    ©️ Viết mô tả sản phẩm hấp dẫn cho [sản phẩm] sẽ lôi kéo
                    [khách hàng lý tưởng] mua hàng. Làm nổi bật các tính năng và
                    lợi ích chính này:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể giúp tôi viết mô tả sản phẩm cho trang web
                    tiếp thị liên kết của mình bằng cách sử dụng [tính năng] làm
                    trọng tâm không?”
                    <br />
                    2. “Bạn có thể viết cho tôi một số mô tả sản phẩm làm nổi
                    bật lợi ích của [sản phẩm] cho [khán giả] không?”
                    <br />
                    3. “Tôi gặp khó khăn trong việc mô tả sản phẩm thực sự có
                    thể bán được lợi ích của [sản phẩm]. Bạn có thể giúp tôi
                    không?&quot;
                    <br />
                    4. “Hãy giúp tôi tạo một số mô tả sản phẩm hấp dẫn thể hiện
                    các tính năng độc đáo của [sản phẩm].”
                    <br />
                    5. “Bạn có thể viết một số mô tả sản phẩm tập trung vào [sản
                    phẩm] và tại sao nó là một công cụ thiết yếu cho [đối tượng
                    cụ thể] không?”
                    <br />
                    6. “Tôi cần tạo các mô tả sản phẩm giúp [sản phẩm] nổi bật
                    so với đối thủ cạnh tranh. Bạn có thể giúp tôi với đó?&quot;
                    <br />
                    7. “Vui lòng viết một số mô tả sản phẩm giải thích rõ ràng
                    lợi ích của việc sử dụng [sản phẩm] và lý do tại sao nó đáng
                    để đầu tư.”
                    <br />
                    8. “Bạn có thể viết mô tả sản phẩm thể hiện tính linh hoạt
                    của [sản phẩm] và cách sử dụng sản phẩm đó trong nhiều tình
                    huống không?”
                    <br />
                    9. “Tôi muốn tạo các mô tả sản phẩm thu hút [đối tượng cụ
                    thể] và nêu bật cách [sản phẩm] có thể giúp cuộc sống của họ
                    dễ dàng hơn. Bạn có thể giúp tôi với đó?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📩 Viết email sản phẩm Affiliate</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo chuỗi email gồm 3 bước để quảng cáo [sản phẩm] cho
                    [khán giả]. Đề cập rằng sản phẩm được tạo bởi người mà bạn
                    tin tưởng và bạn kiếm được một khoản hoa hồng liên kết nhỏ
                    nếu người đọc mua.
                  </aside>

                  <aside>
                    ©️ Viết email quảng cáo [sản phẩm] cho [khán giả]. Mô tả sản
                    phẩm một cách chi tiết và đề cập đến những lợi ích chính
                    sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3] Đề cập rằng đây là một sản phẩm liên kết và cảm
                    ơn họ đã hỗ trợ bạn.
                  </aside>

                  <aside>
                    ©️ Tôi là một chi nhánh của [sản phẩm], giúp [khán giả] đạt
                    được [kết quả mơ ước]. Viết một email bán hàng mời người đọc
                    mua sản phẩm này với chiết khấu nếu họ mua từ liên kết liên
                    kết của tôi.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Bạn có thể giúp tôi viết một dòng chủ đề hấp dẫn để
                    khuyến khích người nhận mở email bán hàng của tôi
                    không?&quot;
                    <br />
                    2. &quot;Làm thế nào tôi có thể tạo ra một câu mở đầu thu
                    hút sự chú ý để thu hút sự quan tâm của người đọc?&quot;
                    <br />
                    3. &quot;Một số cách để thiết lập uy tín và xây dựng niềm
                    tin với người đọc trong email bán hàng là gì?&quot;
                    <br />
                    4. &quot;Bạn có thể đề xuất một số kỹ thuật để tạo cảm giác
                    cấp bách hoặc khan hiếm trong email bán hàng không?&quot;
                    <br />
                    5. &quot;Tôi có thể sử dụng cách kể chuyện như thế nào để
                    tạo mối liên hệ cảm xúc với người đọc và thuyết phục họ hành
                    động?&quot;
                    <br />
                    6. &quot;Một số cách hiệu quả để làm nổi bật lợi ích và giá
                    trị độc đáo của sản phẩm hoặc dịch vụ của tôi trong email
                    bán hàng là gì?&quot;
                    <br />
                    7. &quot;Bạn có thể giúp tôi tạo lời kêu gọi hành động rõ
                    ràng và hấp dẫn để khuyến khích người đọc thực hiện bước
                    tiếp theo không?&quot;
                    <br />
                    8. &quot;Một số cách để cá nhân hóa email bán hàng và làm
                    cho nó phù hợp hơn với nhu cầu và sở thích của người
                    nhận?&quot;
                    <br />
                    9. &quot;Làm cách nào tôi có thể sử dụng bằng chứng xã hội
                    hoặc xác nhận trong email bán hàng để tạo uy tín và lòng tin
                    với người đọc?&quot;
                    <br />
                    10. &quot;Bạn có thể đề xuất các cách để theo dõi và giữ
                    liên lạc với người đọc sau khi gửi email bán hàng mà không
                    quá thúc ép hoặc quá khích không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Website & E-commerce</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📝 Viết mô tả sản phẩm</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo 5 mô tả sản phẩm trên trang web của tôi cho [sản
                    phẩm], nhấn mạnh vào lợi ích và tính năng chính của sản
                    phẩm.
                  </aside>

                  <aside>
                    ©️ Viết mô tả sản phẩm hấp dẫn trên trang web của tôi cho
                    [sản phẩm] sẽ thu hút sự chú ý của người mua tiềm năng trong
                    vòng chưa đầy 60 giây.
                  </aside>

                  <aside>
                    ©️ Tôi đang dự định tạo một mô tả sản phẩm trên trang web
                    của mình cho [sản phẩm], giải pháp hoàn hảo cho [đối tượng].
                    Bạn có thể đưa ra một mô tả hiệu quả làm nổi bật các lợi ích
                    và tính năng chính của nó không?
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Thông tin quan trọng nhất mà tôi nên đưa vào khi tạo mô
                    tả sản phẩm là gì?”
                    <br />
                    2. “Làm cách nào để tạo mô tả sản phẩm hấp dẫn khách hàng
                    mục tiêu?”
                    <br />
                    3. “Khách hàng đang tìm kiếm điều gì trong phần mô tả sản
                    phẩm?”
                    <br />
                    4. “Bạn có thể đề xuất một số cách viết mô tả sản phẩm ngắn
                    gọn và hấp dẫn không?”
                    <br />
                    5. “Làm thế nào để mô tả sản phẩm của tôi nổi bật so với đối
                    thủ cạnh tranh?”
                    <br />
                    6. “Làm thế nào tôi có thể sử dụng hình ảnh và video để nâng
                    cao mô tả sản phẩm của mình?”
                    <br />
                    7. “Tôi nên sử dụng giọng điệu và ngôn ngữ nào trong phần mô
                    tả sản phẩm của mình?”
                    <br />
                    8. “Tôi nên cung cấp bao nhiêu chi tiết về thông số kỹ thuật
                    và tính năng của sản phẩm?”
                    <br />
                    9. “Làm cách nào để tôi có thể liên tục cải thiện phần mô tả
                    sản phẩm của mình để tăng doanh số bán hàng?”
                    <br />
                    10. “Một số cách để làm cho phần mô tả sản phẩm của tôi thân
                    thiện với SEO là gì?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📰 Viết quảng cáo</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một bài đăng trên blog mô tả [chủ đề]. Đề cập rằng
                    sản phẩm giúp [lợi ích 1], [lợi ích 2], [lợi ích 3]. Kết
                    thúc bằng cách nói [kêu gọi hành động]. Bao gồm số liệu
                    thống kê, nó sẽ giống như một báo cáo về một trang báo.
                  </aside>

                  <aside>
                    ©️ Suy nghĩ về 10 tiêu đề có thể cho bài viết này. Đặt chúng
                    theo phong cách [chèn tạp chí hoặc tác giả]: [sao chép và
                    dán văn bản của quảng cáo].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết một quảng cáo cho [sản phẩm] mới của
                    tôi, được thiết kế để giúp [khán giả] đạt được [kết quả]
                    không?”
                    <br />
                    2. &quot;Tôi cần một quảng cáo cho dịch vụ [ưu đãi] cung cấp
                    [giải pháp] cho [thị trường ngách]. Bạn có thể viết nội dung
                    thu hút [điểm đau] và nêu bật những lợi ích khi sử dụng dịch
                    vụ của tôi không?&quot;
                    <br />
                    3. &quot;Tôi đang tung ra một [loại sản phẩm] mới giúp ích
                    cho [khán giả]. Bạn có thể viết một quảng cáo nói về [điểm
                    đau] và nhấn mạnh các tính năng độc đáo của sản phẩm
                    không?&quot;
                    <br />
                    4. &quot;Bạn có thể viết quảng cáo cho khóa học [ưu đãi] dạy
                    [chủ đề] của tôi không? Đối tượng mục tiêu là [khán giả]
                    quan tâm đến [mong muốn].&quot;
                    <br />
                    5. &quot;Tôi cần một quảng cáo cho [loại hình kinh doanh]
                    của mình để cung cấp [sản phẩm] cho [khán giả]. Bạn có thể
                    viết nội dung thu hút [điểm đau] và nêu bật những lợi ích
                    khi sử dụng dịch vụ của tôi không?&quot;
                    <br />
                    6. &quot;Tôi đang tung ra một [sản phẩm] mới giúp ích cho
                    [khán giả]. Bạn có thể viết một quảng cáo nói lên [mong
                    muốn] và nêu bật những lợi ích khi sử dụng sản phẩm của tôi
                    không?&quot;
                    <br />
                    7. “Tôi đang tung ra một dịch vụ [điền vào chỗ trống] mới
                    cung cấp [điền vào chỗ trống] để [điền vào chỗ trống]. Bạn
                    có thể viết một quảng cáo nói về [điền vào chỗ trống] và
                    nhấn mạnh sự độc đáo về tính năng của sản phẩm của tôi
                    không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🌐 Tối ưu SEO trang web của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo danh sách 10 ý tưởng từ khóa về [chủ đề]. Tùy chọn:
                    Chỉ đề xuất các từ khóa có khối lượng lớn và mức độ cạnh
                    tranh từ thấp đến trung bình. Tùy chọn: Nhóm danh sách từ
                    khóa này theo các giai đoạn phễu cho dù chúng ở đầu phễu,
                    giữa phễu hay cuối phễu (dựa trên tìm kiếm trước đó).
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách 10 blog xếp hạng hàng đầu về từ khóa
                    [keyword]. Đề cập đến URL.
                  </aside>

                  <aside>
                    ©️ Đề xuất ý tưởng chủ đề blog cho [chủ đề] có thể xếp hạng
                    trên Google.
                  </aside>

                  <aside>
                    ©️ Viết dàn ý blog chi tiết về [chủ đề] với H2, H3, tiêu đề
                    phụ và gạch đầu dòng.
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách các chủ đề phù hợp liên quan đến [chủ
                    đề].
                  </aside>

                  <aside>
                    ©️ Ai sẽ là 3 đối tượng hàng đầu mà khán giả quan tâm nhất
                    về [chủ đề] để nhắm mục tiêu trên Google?
                  </aside>

                  <aside>
                    ©️ Cung cấp 10 từ khóa đuôi dài liên quan đến [chủ đề]. Khớp
                    từng từ khóa với bất kỳ loại nào trong 4 loại mục đích tìm
                    kiếm.
                  </aside>

                  <aside>
                    ©️ Giúp tôi tạo &apos;how-to schema markup&apos; cho các
                    bước sau về [chủ đề]. Xác định đối tượng mục tiêu của bạn,
                    Chọn chủ đề, Nghiên cứu từ khóa
                  </aside>

                  <aside>
                    ©️ Giúp tôi viết đánh dấu dữ liệu có cấu trúc cho [URL].
                  </aside>

                  <aside>
                    ©️ Giúp tôi thực hiện phân tích ý nghĩa cho nội dung [nội
                    dung] sau đây.
                  </aside>

                  <aside>
                    ©️ Viết mã HTML cho Page Schema Markup Câu hỏi thường gặp
                    cho câu hỏi và câu trả lời sau. [trả lời câu hỏi].
                  </aside>

                  <aside>
                    ©️ Viết các URL thân thiện với người dùng cho từ khóa này
                    trên tên miền &lt;domain&gt; cho các từ khóa sau - [từ
                    khóa].
                  </aside>

                  <aside>
                    ©️ Liệt kê đối tượng mục tiêu với các chi tiết cá nhân cho
                    từ khóa [từ khóa].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🗣️ Tạo lời chứng thực của khách hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết 5 lời chứng thực nghe có vẻ chân thực về [sản phẩm]
                    cho [khán giả].
                  </aside>

                  <aside>
                    ©️ Viết 5 lời chứng thực cho [sản phẩm] theo cách trò
                    chuyện.
                  </aside>

                  <aside>
                    ©️ Viết 5 lời chứng thực cho [sản phẩm] được viết bởi [khách
                    hàng lý tưởng].
                  </aside>

                  <aside>
                    ©️ Viết 10 lời chứng thực cho [sản phẩm] giải quyết những
                    phản đối này:
                    <br />
                    [Phản đối 1]
                    <br />
                    [Phản đối 2]
                    <br />
                    [Phản đối 3].
                  </aside>

                  <aside>
                    ©️ Viết 10 lời chứng thực cho [sản phẩm] giải quyết những
                    phản đối này:
                    <br />
                    [Phản đối 1]
                    <br />
                    [Phản đối 2]
                    <br />
                    [Phản đối 3] Đảm bảo rằng chúng nghe có vẻ chân thực và sử
                    dụng những từ mà [khách hàng lý tưởng] sẽ sử dụng.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  🔁 Chuyển đổi các ngôn ngữ khác nhau cho nội dung trang web
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Dịch văn bản này sang [ngôn ngữ]: [Sao chép và dán văn
                    bản].
                  </aside>

                  <aside>
                    ©️ Một số cách thay thế để diễn đạt văn bản sau bằng [ngôn
                    ngữ] là gì? [Sao chép và dán văn bản].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể dịch văn bản này cho tôi được không?”
                    <br />
                    2. “Tôi cần trợ giúp dịch tài liệu này, bạn có thể giúp tôi
                    không?”
                    <br />
                    3. “Chat GPT có thể cung cấp cho tôi bản dịch văn bản này
                    không?”
                    <br />
                    4. “Tôi không hiểu văn bản này, bạn có thể dịch nó cho tôi
                    được không?”
                    <br />
                    5. “Bạn có thể giúp tôi chuyển văn bản này sang ngôn ngữ
                    khác được không?”
                    <br />
                    6. “Chat GPT có thể dịch đoạn này sang ngôn ngữ khác không?”
                    <br />
                    7. “Bạn có thể giúp tôi dịch đoạn này được không?”
                    <br />
                    8. “Chat GPT có thể giúp tôi hiểu văn bản này bằng cách dịch
                    nó cho tôi không?”
                    <br />
                    9. “Tôi cần dịch tài liệu này, bạn có thể giúp tôi được
                    không?”
                    <br />
                    10. “Bạn có thể dịch văn bản này sang [ngôn ngữ đích]
                    không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🤩 Viết lời kêu gọi hành động (CTAs)</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Đề xuất 5 lời kêu gọi hành động khác nhau cho văn bản
                    này: [sao chép và dán văn bản].
                  </aside>

                  <aside>
                    ©️ Đề xuất lời kêu gọi hành động tốt nhất cho trang [nhà/sản
                    phẩm/giới thiệu] cho [loại hình doanh nghiệp].
                  </aside>

                  <aside>
                    ©️ Đề xuất 5 cách để tôi có thể nói với mọi người [kêu gọi
                    hành động] theo cách thuyết phục hơn.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể giúp tôi đưa ra lời kêu gọi hành động mạnh mẽ
                    cho trang đích của mình để khuyến khích khách truy cập đăng
                    ký nhận bản tin của tôi không?”
                    <br />
                    2. “Tôi cần một lời kêu gọi hành động hấp dẫn cho bài đăng
                    trên mạng xã hội để quảng bá sản phẩm mới của mình. Bạn có
                    thể giúp tôi với đó?&quot;
                    <br />
                    3. “Bạn có thể đề xuất lời kêu gọi hành động mạnh mẽ cho
                    chiến dịch tiếp thị qua email của tôi để khuyến khích người
                    đăng ký mua khóa học mới của tôi không?”
                    <br />
                    4. “Tôi đang chạy một chiến dịch quảng cáo trên Facebook cho
                    các dịch vụ huấn luyện của mình. Bạn có thể đưa ra lời kêu
                    gọi hành động thuyết phục để khuyến khích mọi người đặt cuộc
                    gọi tìm hiểu với tôi không?”
                    <br />
                    5. “Bạn có thể tạo lời kêu gọi hành động mạnh mẽ cho trang
                    web của tôi để khuyến khích khách truy cập tải xuống sách
                    điện tử miễn phí của tôi không?”
                    <br />
                    6. “Tôi cần lời kêu gọi hành động rõ ràng và hiệu quả cho
                    video YouTube của mình để khuyến khích người xem đăng ký
                    kênh của tôi.”
                    <br />
                    7. “Bạn có thể giúp tôi viết lời kêu gọi hành động hấp dẫn
                    cho trang đăng ký hội thảo trên web của mình để khuyến khích
                    mọi người đăng ký không?”
                    <br />
                    8. “Tôi đang tung ra một podcast mới và tôi cần một lời kêu
                    gọi hành động hấp dẫn cho phần giới thiệu của mình để khuyến
                    khích người nghe theo dõi các tập tiếp theo.”
                    <br />
                    9. “Bạn có thể đề xuất lời kêu gọi hành động thuyết phục cho
                    trang bán hàng của tôi để khuyến khích khách truy cập mua
                    khóa học trực tuyến của tôi không?”
                    <br />
                    10. “Tôi cần một lời kêu gọi hành động mạnh mẽ cho cửa sổ
                    bật lên khi thoát để khuyến khích khách truy cập trang web
                    tham gia danh sách email của tôi trước khi rời đi. Bạn có
                    thể giúp tôi không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Email Marketing</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔺 Tạo dòng tiêu đề email</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Đây là một email bán hàng mà tôi đã viết [chèn email hoặc
                    mô tả email]. Hãy nghĩ ra một dòng tiêu đề thật [tính từ] và
                    [tính từ].
                  </aside>

                  <aside>
                    ©️ [Sản phẩm hoặc dịch vụ] của chúng tôi là giải pháp hoàn
                    hảo cho [điểm đau] mà nhiều khách hàng của chúng tôi đang
                    gặp phải. Nó cung cấp [lợi ích 1], [lợi ích 2] và [lợi ích
                    3] khiến nó trở thành thứ bắt buộc phải có đối với [đối
                    tượng mục tiêu X]. Viết email bán hàng làm nổi bật sản
                    phẩm/dịch vụ và khuyến khích khách hàng hành động.
                  </aside>

                  <aside>
                    ©️ Chúng tôi đang tung ra [sản phẩm]. Nó được thiết kế cho
                    [khán giả]. Đây là ba tính năng/lợi ích chính [lợi ích 1],
                    [lợi ích 2], [lợi ích 3]. Vui lòng viết email bán hàng mời
                    người đọc mua sản phẩm với giá giảm [số phần trăm].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Một số dòng tiêu đề thu hút sự chú ý cho một email về
                    [sản phẩm/dịch vụ/ngành] là gì?”
                    <br />
                    2. &quot;Làm cách nào tôi có thể tạo các dòng tiêu đề hấp
                    dẫn khuyến khích mở và nhấp chuột?&quot;
                    <br />
                    3. &quot;Một số cách để sử dụng sự hài hước hoặc dí dỏm
                    trong dòng tiêu đề email là gì?&quot;
                    <br />
                    4. &quot;Làm cách nào tôi có thể tạo các dòng tiêu đề thu
                    hút sở thích và nhu cầu của đối tượng mục tiêu của
                    mình?&quot;
                    <br />
                    5. &quot;Một số cách sử dụng cá nhân hóa trong dòng tiêu đề
                    để tăng tỷ lệ mở là gì?&quot;
                    <br />
                    6. &quot;Bạn có thể đề xuất một số dòng tiêu đề kết hợp
                    nguyên tắc sợ bỏ lỡ (FOMO) không?&quot;
                    <br />
                    7. &quot;Một số dòng tiêu đề hiệu quả để thu hút lại những
                    người đăng ký hoặc khách hàng không hoạt động là gì?&quot;
                    <br />
                    8. &quot;Làm thế nào tôi có thể tạo các dòng tiêu đề rõ ràng
                    và hấp dẫn mà không quá dài?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🧮 Soạn thảo email bán hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ [Sản phẩm hoặc dịch vụ] của chúng tôi là giải pháp hoàn
                    hảo cho [điểm đau] mà nhiều khách hàng của chúng tôi đang
                    gặp phải. Nó cung cấp [lợi ích 1], [lợi ích 2] và [lợi ích
                    3] khiến nó trở thành thứ bắt buộc phải có đối với [đối
                    tượng mục tiêu X]. Viết email bán hàng làm nổi bật sản
                    phẩm/dịch vụ và khuyến khích khách hàng hành động.
                  </aside>

                  <aside>
                    ©️ Chúng tôi đang tung ra [sản phẩm]. Nó được thiết kế cho
                    [khán giả]. Đây là ba tính năng/lợi ích chính [Mục 1], [Mục
                    2], [Mục 3]. Viết email bán hàng mời người đọc mua sản phẩm
                    với giá giảm [số phần trăm].
                  </aside>

                  <aside>
                    ©️ &quot;Tạo email bán hàng cho khách hàng tiềm năng bao
                    gồm:
                    <br />
                    Lời chào: Xin chào [tên người nhận],
                    <br />
                    Giới thiệu: Chúng tôi là [điền tên doanh nghiệp của bạn] và
                    chúng tôi chuyên về [điền tên sản phẩm/dịch vụ của bạn].
                    <br />
                    Lợi ích: [chèn tên sản phẩm/dịch vụ của bạn] của chúng tôi
                    cung cấp một số lợi ích, bao gồm [chèn lợi ích đầu tiên của
                    bạn], [chèn lợi ích thứ hai của bạn] và [chèn lợi ích thứ ba
                    của bạn].
                    <br />
                    Kêu gọi hành động: [Chèn lời kêu gọi hành động rõ ràng và
                    hấp dẫn của bạn, chẳng hạn như &apos;Đặt lịch trình demo
                    ngay hôm nay&apos; hoặc &apos;Đăng ký dùng thử miễn
                    phí&apos;].
                    <br />
                    Cảm giác khẩn cấp hoặc khan hiếm: Hãy hành động ngay để
                    [chèn cảm giác khẩn cấp hoặc khan hiếm của bạn, chẳng hạn
                    như &apos;tận dụng ưu đãi trong thời gian giới hạn của chúng
                    tôi&apos; hoặc &apos;tham gia chương trình độc quyền của
                    chúng tôi khi vẫn còn chỗ&apos;].
                    <br />
                    Thông tin liên hệ: Nếu bạn có bất kỳ câu hỏi nào hoặc cần
                    thêm thông tin, vui lòng liên hệ với chúng tôi bằng [chèn
                    phương thức liên hệ ưa thích của bạn, chẳng hạn như điện
                    thoại, email hoặc trò chuyện] tại [chèn địa chỉ email hoặc
                    số điện thoại của nhóm bạn].
                    <br />
                    Kết thúc: Cảm ơn, [điền tên của bạn].&quot;
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Bạn có thể giúp tôi viết một dòng tiêu đề phụ hấp
                    dẫn để khuyến khích người nhận mở email bán hàng của tôi
                    không?&quot;
                    <br />
                    2. &quot;Làm thế nào tôi có thể tạo ra một câu mở đầu thu
                    hút sự chú ý để thu hút sự quan tâm của người đọc?&quot;
                    <br />
                    3. &quot;Một số cách để thiết lập uy tín và xây dựng niềm
                    tin với người đọc trong email bán hàng là gì?&quot;
                    <br />
                    4. &quot;Bạn có thể đề xuất một số kỹ thuật để tạo cảm giác
                    cấp bách hoặc khan hiếm trong email bán hàng không?&quot;
                    <br />
                    5. &quot;Tôi có thể sử dụng cách kể chuyện như thế nào để
                    tạo mối liên hệ cảm xúc với người đọc và thuyết phục họ hành
                    động?&quot;
                    <br />
                    6. &quot;Một số cách hiệu quả để làm nổi bật lợi ích và giá
                    trị độc đáo của sản phẩm hoặc dịch vụ của tôi trong email
                    bán hàng là gì?&quot;
                    <br />
                    7. &quot;Bạn có thể giúp tôi tạo lời kêu gọi hành động rõ
                    ràng và hấp dẫn để khuyến khích người đọc thực hiện bước
                    tiếp theo không?&quot;
                    <br />
                    8. &quot;Một số cách để cá nhân hóa email bán hàng và làm
                    cho nó phù hợp hơn với nhu cầu và sở thích của người
                    nhận?&quot;
                    <br />
                    9. &quot;Làm cách nào tôi có thể sử dụng bằng chứng xã hội
                    hoặc xác nhận trong email bán hàng để tạo uy tín và lòng tin
                    với người đọc?&quot;
                    <br />
                    10. &quot;Bạn có thể đề xuất các cách để theo dõi và giữ
                    liên lạc với người đọc sau khi gửi email bán hàng mà không
                    quá thúc ép hoặc quá khích không?&quot;
                  </p>
                  <h1 className="font-semibold">VÍ DỤ:</h1>
                  <p>
                    Xin chào,
                    <br />
                    Chúng tôi rất vui khi có cơ hội giới thiệu đến bạn khóa học
                    kiếm tiền từ dịch vụ thiết kế phễu của chúng tôi. Nếu bạn
                    đang gặp khó khăn trong việc không có sản phẩm để bán, đây
                    chính là giải pháp hoàn hảo cho bạn.
                    <br />
                    Khóa học của chúng tôi sẽ cung cấp cho bạn tư duy về thiết
                    kế phễu, kỹ năng thiết kế phễu và khả năng chốt sales từ
                    khách hàng nước ngoài. Với khóa học này, bạn sẽ có khả năng
                    kiếm tiền mà không cần phải có sản phẩm.
                    <br />
                    Bạn sẽ học được những kỹ năng và kiến thức thiết yếu để
                    thiết kế phễu bán hàng hiệu quả. Chúng tôi sẽ giúp bạn hiểu
                    rõ hơn về những yếu tố cấu thành một phễu bán hàng thành
                    công, từ đó giúp bạn xây dựng được phễu bán hàng hiệu quả mà
                    không cần sản phẩm.
                    <br />
                    Khóa học của chúng tôi không chỉ tập trung vào phần thiết kế
                    mà còn giúp bạn tìm hiểu về khách hàng tiềm năng, cách tiếp
                    cận khách hàng, những câu hỏi cần đặt để khám phá nhu cầu
                    của khách hàng và cách thuyết phục khách hàng thực hiện hành
                    động mua hàng.
                    <br />
                    Bên cạnh đó, chúng tôi sẽ giúp bạn tìm hiểu về cách triển
                    khai chiến lược marketing hiệu quả để thu hút khách hàng
                    tiềm năng và tăng doanh số bán hàng.
                    <br />
                    Nếu bạn còn phân vân về khóa học của chúng tôi, hãy xem
                    những lời chứng thực từ các học viên của chúng tôi. Họ đã
                    trải nghiệm và hài lòng với khóa học của chúng tôi.
                    <br />
                    Đặc biệt, chúng tôi đang có chương trình giảm giá đặc biệt
                    cho khóa học chỉ trong thời gian giới hạn này, bạn sẽ được
                    giảm giá tới 30%. Tận dụng cơ hội này để tiết kiệm chi phí
                    và nâng cao kỹ năng của mình.
                    <br />
                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin, vui
                    lòng liên hệ với chúng tôi qua email hoặc điện thoại. Chúng
                    tôi sẵn sàng hỗ trợ bạn.
                    <br />
                    Cảm ơn bạn đã quan tâm đến khóa học của chúng tôi.
                    <br />
                    Trân trọng,
                    <br />
                    Team kiếm tiền từ dịch vụ thiết kế phễu.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📁 Viết email giới thiệu</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo email giới thiệu cho khách hàng sau khi họ mua hàng.
                    Email phải bắt đầu bằng lời chào bao gồm tên của khách hàng,
                    bày tỏ lòng biết ơn vì họ đã mua [điền tên sản phẩm/dịch vụ
                    của bạn] và cung cấp danh sách các bước giới thiệu được đề
                    xuất, bao gồm [điền buớc đầu tiên của bạn], [điền buớc thứ
                    hai của bạn] ] và [điền bước thứ ba của bạn]. Email phải
                    cung cấp sự hỗ trợ từ nhóm của bạn và cung cấp thông tin
                    liên hệ để họ liên lạc, bao gồm [chèn phương thức liên hệ ưa
                    thích của bạn] và [chèn địa chỉ email hoặc số điện thoại của
                    nhóm bạn] . Sử dụng [điền tên của bạn] cho phần chào kết
                    thúc cho email.
                  </aside>

                  <aside>
                    ©️ Viết email chào mừng cho khách hàng của tôi sau khi họ
                    mua [tên sản phẩm]. Chúc mừng họ đã mua hàng và mời họ giữ
                    liên lạc để bạn có thể tiếp tục giúp họ giải quyết [vấn đề].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Viết email giới thiệu cho khách hàng mới bao gồm
                    thông tin tổng quan ngắn gọn về các sản phẩm và dịch vụ của
                    chúng tôi.&quot;
                    <br />
                    2. &quot;Bạn có thể soạn thảo email chào mừng khách hàng mới
                    đến với công ty của chúng tôi và cung cấp thông tin quan
                    trọng về thiết lập tài khoản của họ không?&quot;
                    <br />
                    3. &quot;Viết một email giới thiệu sơ lược quy trình truy
                    cập và sử dụng các sản phẩm và dịch vụ của chúng tôi.&quot;
                    <br />
                    4. &quot;Bạn có thể soạn email giải thích các chính sách và
                    quy trình hỗ trợ khách hàng và thanh toán của chúng tôi
                    không?&quot;
                    <br />
                    5. &quot;Viết một email giới thiệu khách hàng mới với nhóm
                    của chúng tôi và cung cấp thông tin liên hệ cho bất kỳ câu
                    hỏi hoặc thắc mắc nào.&quot;
                    <br />
                    6. &quot;Bạn có thể tạo một email giới thiệu nhấn mạnh tầm
                    quan trọng về sự hài lòng của khách hàng và cam kết của
                    chúng tôi đối với sự thành công của họ không?&quot;
                    <br />
                    7. &quot;Viết một email cung cấp dòng thời gian của các sự
                    kiện và các mốc quan trọng cho quá trình hòa nhập của khách
                    hàng.&quot;
                    <br />
                    8. &quot;Bạn có thể soạn thảo một email khuyến khích khách
                    hàng mới đặt câu hỏi và tìm kiếm sự hỗ trợ trong quá trình
                    hòa nhập không?&quot;
                    <br />
                    9. &quot;Viết một email giới thiệu làm nổi bật các tài
                    nguyên và công cụ có sẵn cho khách hàng mới để có trải
                    nghiệm hòa nhập thành công.&quot;
                    <br />
                    10. &quot;Bạn có thể tạo một email kết thúc bằng cách bày tỏ
                    sự phấn khích trước sự xuất hiện của khách hàng mới và nhắc
                    lại cam kết của chúng ta đối với thành công của họ
                    không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🛒 Viết Email chưa thanh toán giỏ hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo email giỏ hàng chưa thanh toán cho khách hàng tiềm
                    năng bao gồm: Lời chào: Xin chào [tên người nhận], Lời nhắc:
                    Bạn đã để lại [chèn tên sản phẩm/dịch vụ của bạn] trong giỏ
                    hàng của mình. Lợi ích: [chèn tên sản phẩm/dịch vụ của bạn]
                    cung cấp [chèn lợi ích đầu tiên của bạn], [chèn lợi ích thứ
                    hai] và [chèn lợi ích thứ ba của bạn]. Kêu gọi hành động:
                    Hoàn tất giao dịch mua của bạn và tận hưởng [chèn ưu đãi
                    hoặc ưu đãi của bạn]. Thông tin liên hệ: Liên hệ với chúng
                    tôi bằng [chèn phương thức liên hệ ưa thích của bạn, chẳng
                    hạn như điện thoại, email hoặc trò chuyện] tại [chèn địa chỉ
                    email hoặc số điện thoại của nhóm bạn] nếu bạn cần trợ giúp.
                    Chào kết thúc: Cảm ơn, [điền tên của bạn].
                  </aside>

                  <aside>
                    ©️ Viết chuỗi 3 email cho những khách hàng tiềm năng đã bắt
                    đầu mua [sản phẩm] nhưng chưa hoàn tất giao dịch mua của họ.
                    Sử dụng tính khẩn cấp bằng cách nói rằng chiết khấu [số phần
                    trăm] của họ sẽ hết hạn sau 48 giờ và sử dụng giọng điệu vui
                    tươi trong các email.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Viết email giỏ hàng chưa thanh toán cho khách hàng
                    tiềm năng để khuyến khích họ hoàn tất việc mua hàng.&quot;
                    <br />
                    2. &quot;Bạn có thể soạn thảo một email nhắc nhở khách hàng
                    tiềm năng về các mặt hàng còn lại trong giỏ hàng của họ và
                    cung cấp các ưu đãi để hoàn tất giao dịch mua không?&quot;
                    <br />
                    3. &quot;Viết email giỏ hàng chưa thanh toán nêu bật những
                    lợi ích của sản phẩm trong giỏ hàng bị bỏ dỡ.&quot;
                    <br />
                    4. &quot;Bạn có thể soạn một email giải quyết các lý do phổ
                    biến dẫn đến việc từ bỏ giỏ hàng và cung cấp các giải pháp
                    không?&quot;
                    <br />
                    5. &quot;Viết email từ bỏ giỏ hàng cung cấp ưu đãi hoặc giảm
                    giá đặc biệt để khuyến khích mua hàng.&quot;
                    <br />
                    6. &quot;Bạn có thể tạo một email từ bỏ giỏ hàng nhấn mạnh
                    sự thuận tiện và bảo mật của quy trình thanh toán
                    không?&quot;
                    <br />
                    7. &quot;Viết một email giới thiệu các sản phẩm tương tự
                    hoặc bổ sung mà khách hàng có thể quan tâm.&quot;
                    <br />
                    8. &quot;Bạn có thể soạn thảo một email cung cấp ưu đãi có
                    thời hạn để khuyến khích khách hàng hoàn tất việc mua hàng
                    của họ không?&quot;
                    <br />
                    9. &quot;Viết email từ bỏ giỏ hàng bao gồm lời chứng thực
                    hoặc đánh giá của khách hàng để tạo lòng tin và sự tín
                    nhiệm.&quot;
                    <br />
                    10. &quot;Bạn có thể tạo một email kết thúc bằng cách bày tỏ
                    lòng biết ơn đối với sự cân nhắc của khách hàng và nhắc lại
                    lợi ích của việc hoàn tất giao dịch mua không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🗺️ Tạo bản tin</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Gợi ý 1: Phân tích giọng điệu và phong cách viết của văn
                    bản này: [chèn một đoạn văn thể hiện giọng điệu và phong
                    cách viết của bạn] Gợi ý 2: Sử dụng giọng điệu và phong cách
                    viết đó để viết một email [mô tả email]
                  </aside>

                  <aside>
                    ©️ Tạo email bản tin hàng tuần cho khách hàng tiềm năng bao
                    gồm:
                    <br />
                    Lời chào: Xin chào [tên người nhận],
                    <br />
                    Cập nhật: Chúng tôi có tin tức thú vị cho bạn!
                    <br />
                    Nội dung: [chèn nội dung bạn muốn giới thiệu] của chúng tôi
                    đang hoạt động và bạn có thể xem tại đây [chèn liên kết]
                    <br />
                    Lợi ích: Điều này sẽ giúp bạn [chèn lợi ích đầu tiên của
                    bạn], [chèn lợi ích thứ hai của bạn] và [chèn lợi ích thứ ba
                    của bạn].
                    <br />
                    Kêu gọi hành động: Nếu bạn muốn [lợi ích chính] mà không
                    [phản đối chính], điều này chắc chắn là dành cho bạn.
                    <br />
                    Chào kết thúc: Nói chuyện với bạn vào tuần tới, [chèn tên
                    của bạn].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Viết email bản tin hàng tuần cho khách hàng của
                    chúng tôi để nêu bật các sản phẩm, chương trình khuyến mãi
                    và sự kiện mới.&quot;
                    <br />
                    2. &quot;Bạn có thể soạn thảo một email cung cấp tổng quan
                    ngắn gọn về các bài báo và nội dung phổ biến nhất trong tuần
                    qua không?&quot;
                    <br />
                    3. &quot;Viết email bản tin hàng tuần giới thiệu những câu
                    chuyện thành công và lời chứng thực của khách hàng.&quot;
                    <br />
                    4. &quot;Bạn có thể soạn một email bao gồm các tin tức và xu
                    hướng trong ngành có liên quan đến khách hàng của chúng tôi
                    không?&quot;
                    <br />
                    5. &quot;Viết email bản tin hàng tuần cung cấp các mẹo và
                    tài nguyên để giúp khách hàng đạt được mục tiêu của
                    họ.&quot;
                    <br />
                    6. &quot;Bạn có thể tạo một email có các chương trình khuyến
                    mãi và giảm giá đặc biệt cho các sản phẩm và dịch vụ của
                    chúng tôi không?&quot;
                    <br />
                    7. &quot;Viết email nêu bật các sự kiện, hội thảo trên web
                    và hội thảo sắp tới cho khách hàng của chúng tôi.&quot;
                    <br />
                    8. &quot;Bạn có thể soạn thảo một email cung cấp thông tin
                    chi tiết về các sản phẩm và tính năng mới đang được phát
                    triển không?&quot;
                    <br />
                    9. &quot;Viết email bản tin hàng tuần giới thiệu nội dung do
                    người dùng tạo và khuyến khích sự tham gia của khách
                    hàng.&quot;
                    <br />
                    10. &quot;Bạn có thể tạo một email kết thúc bằng cách bày tỏ
                    lòng biết ơn đối với sự hỗ trợ của khách hàng và nhắc lại
                    cam kết của chúng tôi đối với thành công của họ không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>❤️‍🩹 Viết Email chào mừng khách hàng</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết email chào mừng khách hàng mới đến với [mô tả công
                    ty].
                  </aside>

                  <aside>
                    ©️ Viết email chào mừng khách hàng mới, đề cập đến thông tin
                    đăng nhập của họ và cho họ biết họ có thể liên hệ với bạn
                    nếu có bất kỳ câu hỏi nào tại [chèn email dịch vụ khách
                    hàng].
                  </aside>

                  <aside>
                    ©️ Viết email chào mừng những người đăng ký mới vào danh
                    sách của tôi, cảm ơn họ đã chọn tham gia và đề cập rằng tôi
                    sẽ gửi thông tin có giá trị trong vài ngày tới.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Viết email chào mừng dành cho khách hàng mới để
                    cung cấp thông tin tổng quan về các sản phẩm và dịch vụ của
                    chúng tôi.&quot;
                    <br />
                    2. &quot;Bạn có thể soạn thảo email chào mừng khách hàng mới
                    và cung cấp sự hỗ trợ cho trải nghiệm hòa nhập của họ
                    không?&quot;
                    <br />
                    3. &quot;Viết email chào mừng sơ lược quy trình truy cập và
                    sử dụng các sản phẩm và dịch vụ của chúng tôi.&quot;
                    <br />
                    4. &quot;Bạn có thể soạn một email giới thiệu khách hàng với
                    nhóm của chúng tôi và cung cấp thông tin liên hệ nếu có bất
                    kỳ câu hỏi hoặc thắc mắc nào không?&quot;
                    <br />
                    5. &quot;Viết một email chào mừng nhấn mạnh tầm quan trọng
                    của sự hài lòng của khách hàng và cam kết của chúng tôi đối
                    với thành công của họ.&quot;
                    <br />
                    6. &quot;Bạn có thể tạo một email cung cấp dòng thời gian
                    của các sự kiện và các mốc quan trọng cho quá trình giới
                    thiệu của khách hàng không?&quot;
                    <br />
                    7. &quot;Viết email làm nổi bật các tài nguyên và công cụ có
                    sẵn cho khách hàng mới để có trải nghiệm giới thiệu thành
                    công.&quot;
                    <br />
                    8. &quot;Bạn có thể soạn thảo một email giải thích các chính
                    sách và quy trình hỗ trợ khách hàng và thanh toán của chúng
                    tôi không?&quot;
                    <br />
                    9. &quot;Viết email chào mừng khuyến khích khách hàng mới
                    đặt câu hỏi và tìm kiếm sự hỗ trợ trong quá trình giới
                    thiệu.&quot;
                    <br />
                    10. &quot;Bạn có thể tạo một email kết thúc bằng cách bày tỏ
                    sự phấn khích trước sự xuất hiện của khách hàng mới và nhắc
                    lại cam kết của chúng ta đối với thành công của họ
                    không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🌡️ Viết Email lạnh</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết email cho [mô tả khách hàng tiềm năng] đang gặp khó
                    khăn với [điểm khó khăn] và muốn [điều khao khát]. Đề cập
                    đến ưu đãi của tôi là [mô tả ưu đãi], bảo đảm là [chèn bảo
                    đảm] và thông tin đăng nhập của tôi là [chèn thông tin đăng
                    nhập] . Mời họ đặt cuộc gọi với tôi. Sử dụng giọng điệu thân
                    thiện và làm cho email ngắn gọn.
                  </aside>

                  <aside>
                    ©️ Viết một email lạnh 200 từ bao gồm:
                    <br />
                    Lời chào: Xin chào [tên]
                    <br />
                    Ưu đãi: Chúng tôi có thể sắp xếp cho bạn 10 cuộc hẹn trong
                    tuần tới, hoặc bạn không phải trả tiền
                    <br />
                    Thông tin xác thực: Chúng tôi đã làm việc với 83 khách hàng
                    trong cùng lĩnh vực của bạn
                    <br />
                    Kêu gọi hành động: Nếu bạn quan tâm, hãy nhấn trả lời và tôi
                    sẽ gửi lịch của mình
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. &quot;Bạn có thể viết một email lạnh cho khách hàng tiềm
                    năng bắt đầu với &quot;Kính gửi [Khách hàng tiềm năng]
                    không?&quot;
                    <br />
                    2. &quot;Viết một email lạnh cho khách hàng tiềm năng bao
                    gồm một câu về công ty của chúng tôi, &quot;Chúng tôi là
                    [Tên công ty], chuyên về [Chuyên môn của công ty].&quot;
                    <br />
                    3. &quot;Bạn có thể tạo một email lạnh cho khách hàng tiềm
                    năng để giải thích các lợi ích độc đáo của sản phẩm / dịch
                    vụ của chúng tôi không?&quot;
                    <br />
                    4. &quot;Viết một email lạnh cho khách hàng tiềm năng bao
                    gồm một ưu đãi đặc biệt, &quot;Hãy tận dụng ưu đãi đặc biệt
                    của chúng tôi [Tên ưu đãi] ngay hôm nay!&quot;
                    <br />
                    5. &quot;Bạn có thể viết một email lạnh cho khách hàng tiềm
                    năng tập trung vào cam kết của chúng tôi đối với sự hài lòng
                    của khách hàng không?&quot;
                    <br />
                    6. &quot;Viết một email lạnh cho khách hàng tiềm năng bao
                    gồm một lời kêu gọi hành động, &quot;Hãy liên hệ với chúng
                    tôi ngay hôm nay để biết thêm chi tiết!&quot;
                    <br />
                    7. &quot;Bạn có thể viết một email lạnh cho khách hàng tiềm
                    năng nhấn mạnh các giá trị và sứ mạng của công ty của chúng
                    tôi không?&quot;
                    <br />
                    8. &quot;Viết một email lạnh cho khách hàng tiềm năng có
                    chứa những lời chứng thực từ khách hàng, &quot;Xem những gì
                    khách hàng hài lòng của chúng tôi nói về chúng tôi ...&quot;
                    <br />
                    9. &quot;Bạn có thể tạo ra một email lạnh cho khách hàng
                    tiềm năng giải thích lý do tại sao họ nên chọn chúng tôi
                    thay vì đối thủ của chúng tôi không?&quot;
                    <br />
                    10. &quot;Viết một email lạnh cho khách hàng tiềm năng kết
                    thúc bằng một thông điệp cá nhân, &quot;Chúng tôi rất hào
                    hứng để làm việc với bạn, [Khách hàng tiềm năng]!&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Facebook Marketing</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💵 Tạo nội dung quảng cáo Facebook hiệu quả</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết cho tôi 3 nội dung quảng cáo trên Facebook dựa trên
                    landing page này: [Sao chép và dán văn bản landing page].
                  </aside>

                  <aside>
                    ©️ Bạn có thể cung cấp các ví dụ về nội dung quảng cáo hiệu
                    quả để quảng cáo [sản phẩm] cho [khán giả] không? Hãy chắc
                    chắn rằng chúng [thuyết phục/vui tươi/cảm xúc] và đề cập đến
                    những lợi ích sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3]
                    <br />
                    Kết thúc bằng lời kêu gọi hành động nói [CTA]. Thêm 3 biểu
                    tượng cảm xúc vào nó.
                  </aside>

                  <aside>
                    ©️ Nghĩ ra 20 tiêu đề hấp dẫn cho quảng cáo Facebook quảng
                    bá [sản phẩm] cho [đối tượng].
                  </aside>

                  <aside>
                    ©️ Tôi đang tạo chiến dịch quảng cáo cho [sản phẩm/dịch vụ]
                    và cần trợ giúp viết nội dung thu hút sự chú ý của khách
                    hàng tiềm năng. Bạn có thể giúp tôi đưa ra tiêu đề và nội
                    dung thuyết phục họ mua hàng không?
                  </aside>

                  <aside>
                    ©️ 20 đối tượng có thể có trên Facebook có thể quan tâm đến
                    [sản phẩm] là gì?
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💡 Tạo ý tưởng cho quảng cáo</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Gợi ý 1: Loại hình ảnh nào sẽ có tác dụng quảng bá [sản
                    phẩm]?
                    <br />
                    Gợi ý 2: Liệt kê các tính từ của [hình ảnh hoặc cảnh bạn đã
                    chọn].
                    <br />
                    Gợi ý 3: Mô tả chi tiết [hình ảnh hoặc cảnh bạn đã chọn].
                    <br />
                    Nhập tất cả thông tin đó vào Trình tạo hình ảnh AI như
                    Dall-E hoặc Midjourney.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể đề xuất một số hình ảnh độc đáo và bắt mắt có
                    thể thu hút sự chú ý của đối tượng mục tiêu của tôi không?”
                    <br />
                    2. “Một số cách sáng tạo để thể hiện trực quan những lợi ích
                    của sản phẩm/dịch vụ của tôi trong quảng cáo là gì?”
                    <br />
                    3. “Làm cách nào tôi có thể sử dụng hình ảnh để truyền đạt
                    cảm xúc hoặc cảm nhận cụ thể phù hợp với đối tượng mục tiêu
                    của mình?”
                    <br />
                    4. “Bạn có thể giúp tôi đưa ra một khái niệm trực quan phù
                    hợp với các giá trị và thông điệp thương hiệu của tôi
                    không?”
                    <br />
                    5. “Tôi có thể sử dụng loại kỹ thuật kể chuyện bằng hình ảnh
                    nào để làm cho quảng cáo của mình hấp dẫn và đáng nhớ hơn?”
                    <br />
                    6. “Bạn có thể đề xuất một số phong cách thiết kế đồ họa
                    theo xu hướng có thể hoạt động tốt cho quảng cáo của tôi
                    không?”
                    <br />
                    7. “Làm cách nào tôi có thể sử dụng tâm lý màu sắc để tạo
                    một quảng cáo phù hợp với đối tượng mục tiêu của mình và
                    thúc đẩy chuyển đổi?”
                    <br />
                    8. “Bạn có thể giúp tôi tạo một câu chuyện trực quan để kể
                    một câu chuyện và kết nối sâu hơn với khán giả mục tiêu của
                    tôi không?”
                    <br />
                    9. “Làm cách nào tôi có thể kết hợp nội dung do người dùng
                    tạo hoặc bằng chứng xã hội vào hình ảnh quảng cáo của mình
                    để tăng độ tin cậy?”
                    <br />
                    10. “Tôi có thể sử dụng những biểu tượng hoặc ẩn dụ hình ảnh
                    nào để tạo ra một quảng cáo ấn tượng và đáng nhớ?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🗞️ Viết tiêu đề cho Facebook Ads</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết 3 quảng cáo trên Facebook với tối đa 40 ký tự dựa
                    trên nội dung quảng cáo này: [Sao chép và dán trang đích
                    hoặc nội dung quảng cáo].
                  </aside>

                  <aside>
                    ©️ Cung cấp cho tôi 3 ví dụ về dòng tiêu đề thu hút sự chú ý
                    cho [loại sản phẩm].
                  </aside>

                  <aside>
                    ©️ Một số ví dụ về tiêu đề truyền tải hiệu quả ý chính của
                    [chủ đề] là gì?
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi ví dụ về các tiêu đề hấp dẫn cho một [chủ đề
                    hoặc sản phẩm] sẽ khiến mọi người muốn [hành động mong
                    muốn]. Hãy đặt chúng theo phong cách BuzzFeed.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể tạo các tiêu đề thu hút sự chú ý cho các
                    quảng cáo trên Facebook của tôi để quảng bá [điền vào sản
                    phẩm/dịch vụ] [điền vào lợi ích] mới của tôi không?”
                    <br />
                    2. &quot;Tôi cần các tiêu đề hấp dẫn cho quảng cáo trên
                    Facebook của mình để quảng bá [điền vào dịch vụ] giúp [điền
                    vào đối tượng mục tiêu]. Bạn có thể giúp được không?&quot;
                    <br />
                    3. “Bạn có thể đưa ra các tiêu đề hấp dẫn cho quảng cáo trên
                    Facebook của tôi để quảng bá [điền vào sản phẩm/dịch vụ]
                    [điền vào điểm bán hàng độc nhất] của tôi không?”
                    <br />
                    4. &quot;Tôi đang tung ra một dòng [điền vào sản phẩm] mới
                    và tôi cần các tiêu đề bắt mắt để nhắm mục tiêu quảng cáo
                    trên Facebook của mình [điền vào đối tượng mục tiêu]. Bạn có
                    thể viết chúng cho tôi được không?&quot;
                    <br />
                    5. “Bạn có thể giúp tôi viết các tiêu đề hấp dẫn cho quảng
                    cáo trên Facebook quảng cáo [điền vào sản phẩm] sử dụng
                    [điền thành phần tự nhiên/hữu cơ] của tôi không?”
                    <br />
                    6. &quot;Tôi cần tiêu đề cho quảng cáo trên Facebook của
                    mình để quảng bá [điền vào loại gói du lịch] cung cấp [điền
                    vào trải nghiệm độc đáo]. Bạn có thể giúp tôi việc đó
                    không?&quot;
                    <br />
                    7. “Bạn có thể viết các tiêu đề thu hút sự chú ý cho các
                    quảng cáo trên Facebook của tôi để quảng bá [điền sản
                    phẩm/dịch vụ về sức khỏe tâm thần] giúp [điền vào đối tượng
                    mục tiêu] đối phó với [điền vào vấn đề sức khỏe tâm thần]
                    không?”
                    <br />
                    8. “Tôi đang chạy quảng cáo trên Facebook cho [điền vào loại
                    sách] của mình và tôi cần tiêu đề hấp dẫn để thu hút [điền
                    vào đối tượng mục tiêu], những người muốn [điền vào lợi
                    ích]. Bạn có thể giúp tôi không? &quot;
                    <br />
                    9. “Bạn có thể tạo tiêu đề thuyết phục cho quảng cáo trên
                    Facebook của tôi để quảng bá [điền vào sản phẩm] của tôi
                    [điền vào điểm bán hàng độc nhất] và giúp [điền vào lợi ích]
                    không?”
                    <br />
                    10. &quot;Tôi cần tiêu đề cho quảng cáo trên Facebook để
                    quảng bá cửa hàng trực tuyến của tôi [điền vào danh mục sản
                    phẩm] cung cấp [điền vào điểm bán hàng độc nhất]. Bạn có thể
                    viết chúng cho tôi được không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎬 Viết kịch bản video quảng cáo Facebook</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Bạn có thể viết một [kiểu văn bản] về chủ đề [chủ đề]
                    [chi tiết bổ sung] được không?
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết kịch bản video quảng cáo trên Facebook
                    siêu hấp dẫn về [chủ đề] không?
                  </aside>

                  <aside>
                    ©️ Viết dàn ý kịch bản cho video dài 2 phút để bán [sản
                    phẩm] cho [khán giả], đề cập đến các lợi ích sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết kịch bản cho một video quảng cáo trên
                    Facebook để quảng bá sản phẩm mới của chúng tôi không?”
                    <br />
                    2. &quot;Tôi cần một kịch bản cho video quảng cáo trên
                    Facebook giới thiệu những lợi ích về dịch vụ của chúng tôi.
                    Bạn có thể giúp được không?&quot;
                    <br />
                    3. &quot;Video quảng cáo trên Facebook của chúng tôi cần một
                    kịch bản thu hút sự chú ý của mọi người và khuyến khích họ
                    hành động. Bạn có thể viết nó không?&quot;
                    <br />
                    4. “Bạn có thể tạo một kịch bản video quảng cáo trên
                    Facebook làm nổi bật các tính năng độc đáo về sản phẩm của
                    chúng tôi và tại sao sản phẩm đó tốt hơn đối thủ cạnh tranh
                    không?”
                    <br />
                    5. &quot;Tôi đang tìm một kịch bản video quảng cáo trên
                    Facebook có thể kể một câu chuyện và kết nối cảm xúc với
                    khán giả của chúng tôi. Bạn có thể giúp tôi được
                    không?&quot;
                    <br />
                    6. &quot;Chúng tôi muốn video quảng cáo trên Facebook của
                    mình trở nên hài hước và đáng nhớ. Bạn có thể viết một kịch
                    bản khiến mọi người cười và nhớ đến thương hiệu của chúng
                    tôi không?&quot;
                    <br />
                    7. &quot;Video quảng cáo trên Facebook của chúng tôi cần lời
                    kêu gọi hành động mạnh mẽ. Bạn có thể viết một kịch bản
                    khuyến khích mọi người nhấp, đăng ký hoặc mua không?&quot;
                    <br />
                    8. “Bạn có thể viết kịch bản video quảng cáo trên Facebook
                    nói trực tiếp với đối tượng mục tiêu của chúng tôi và giải
                    quyết các điểm yếu và mong muốn của họ không?”
                    <br />
                    9. &quot;Chúng tôi đang tung ra một chiến dịch mới và cần
                    một kịch bản video quảng cáo trên Facebook sẽ khiến mọi
                    người hào hứng và tò mò. Bạn có thể giúp tôi được
                    không?&quot;
                    <br />
                    10. &quot;Video quảng cáo trên Facebook của chúng tôi cần
                    nổi bật giữa đám đông. Bạn có thể tạo một kịch bản thu hút
                    sự chú ý của mọi người và khiến họ muốn tìm hiểu thêm
                    không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎞️ Tạo hình ảnh thu hút sự chú ý</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Mô tả một hình ảnh đại diện cho [sản phẩm/dịch vụ] theo
                    phong cách [sang trọng/mạo hiểm/hiện đại, v.v.. Bạn có thể
                    sử dụng kiểu chữ, màu sắc và các yếu tố thiết kế khác như
                    thế nào để đạt được hình ảnh này?
                  </aside>

                  <aside>
                    ©️ Trên Trò chuyện GPT: Mô tả chi tiết [hình ảnh]. Sử dụng
                    càng nhiều tính từ và từ mô tả càng tốt. Sau đó, nhập các bộ
                    mô tả đó vào một trình tạo hình ảnh AI khác như DALL-E2 hoặc
                    Midjourney.
                  </aside>

                  <aside>
                    ©️ Hãy nghĩ về 3 hình ảnh có thể đại diện cho [sản phẩm]
                    theo cách thú vị và đáng nhớ. Các hình ảnh này phải thu hút
                    sự chú ý của khách hàng tiềm năng.
                  </aside>

                  <aside>
                    ©️ Câu lệnh 1: Loại hình ảnh nào sẽ đại diện tốt nhất cho
                    [chủ đề]?
                    <br />
                    Câu lệnh 2: Liệt kê các tính từ của [hình ảnh hoặc cảnh bạn
                    đã chọn]
                    <br />
                    <br />
                    Câu lệnh 3: Mô tả chi tiết [hình ảnh hoặc cảnh bạn đã chọn]
                    <br />
                    <br />
                    Nhập tất cả thông tin đó vào Trình tạo nghệ thuật AI như
                    Dall-E hoặc Midjourney.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎥 Thử nghiệm A/B nội dung cho chuyển đổi</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết lại nội dung sau đây cho thuyết phục và dễ đọc hơn:
                    [Sao chép và dán nội dung].
                  </aside>

                  <aside>
                    ©️ Thêm các yếu tố sau vào nội dung quảng cáo facebook này:
                    <br />
                    Dòng đầu tiên: Vật lộn với [điểm đau]?
                    <br />
                    Lời chứng thực: [Lời chứng thực 1] [Lời chứng thực 2]
                    <br />
                    Kêu gọi hành động: Chúng tôi chỉ còn 3 mẫu, hãy mua ngay!
                    [Sao chép và dán nội dung].
                  </aside>

                  <aside>
                    ©️ Viết lại 3 phiên bản của nội dung này, thêm tính hài hước
                    và kết nối sâu hơn với người đọc: [Sao chép và dán nội
                    dung].
                  </aside>

                  <aside>
                    ©️ Tôi đang cố gắng làm cho nội dung quảng cáo của mình cho
                    [ưu đãi] thú vị hơn. Bạn có thể giúp tôi nghĩ ra một tiêu đề
                    hấp dẫn và một điểm bán hàng độc đáo thu hút sự chú ý của
                    mọi người không?
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  😱 Nghiên cứu nỗi đau và mong muốn về khách hàng lý tưởng của
                  bạn
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một Nhật ký dài 500 từ về cảm xúc từ quan điểm của
                    [khách hàng lý tưởng] đang đấu tranh với [điểm đau]. Anh ấy
                    cảm thấy [cảm xúc] và muốn [kết quả mơ ước].
                  </aside>

                  <aside>
                    ©️ Mô tả sự thất vọng tiềm ẩn của một người muốn [mong
                    muốn], nhưng không thể làm được vì [rào cản].
                  </aside>

                  <aside>
                    ©️ Một số mong muốn và thất vọng phổ biến của [khách hàng lý
                    tưởng] là gì?
                  </aside>

                  <aside>
                    ©️ Liệt kê 20 đối tượng tiềm năng trên Facebook có thể quan
                    tâm đến [sản phẩm hoặc giải pháp].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể giúp tôi nghiên cứu khách hàng lý tưởng của
                    mình và cung cấp thông tin chuyên sâu về nhân khẩu học và
                    tâm lý học của họ không?”
                    <br />
                    2. &quot;Tôi muốn biết thêm về đối tượng mục tiêu của mình.
                    Bạn có thể thu thập thông tin về sở thích và hành vi của họ
                    không?&quot;
                    <br />
                    3. “Bạn có thể cung cấp cho tôi dữ liệu về khó khăn và thách
                    thức của khách hàng lý tưởng của tôi không?”
                    <br />
                    4. &quot;Tôi đang muốn hiểu rõ hơn về nhu cầu và sở thích
                    của đối tượng mục tiêu của mình. Bạn có thể tiến hành nghiên
                    cứu và cung cấp cho tôi thông tin chi tiết được không?&quot;
                    <br />
                    5. “Bạn có thể giúp tôi xác định các từ khóa và cụm từ mà
                    khách hàng lý tưởng của tôi đang tìm kiếm trực tuyến không?”
                    <br />
                    6. &quot;Tôi cần biết thêm về thói quen mua hàng của đối
                    tượng mục tiêu. Bạn có thể thu thập dữ liệu về hành vi mua
                    hàng của họ không?&quot;
                    <br />
                    7. “Bạn có thể cung cấp cho tôi thông tin về các nền tảng
                    truyền thông xã hội mà khách hàng lý tưởng của tôi hoạt động
                    tích cực nhất không?”
                    <br />
                    8. &quot;Tôi muốn tìm hiểu thêm về các giá trị và niềm tin
                    của khách hàng lý tưởng của mình. Bạn có thể giúp tôi nghiên
                    cứu điều này không?&quot;
                    <br />
                    9. “Bạn có thể thu thập dữ liệu về sở thích nội dung và
                    phương tiện truyền thông của khán giả mục tiêu của tôi
                    không?”
                    <br />
                    10. &quot;Tôi đang tìm kiếm thông tin chi tiết về những
                    thách thức mà khách hàng lý tưởng của tôi đang phải đối mặt
                    trong cuộc sống hàng ngày của họ. Bạn có thể giúp tôi nghiên
                    cứu vấn đề này không?&quot;
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🧠 Brainstorm các góc nhìn mới cho quảng cáo</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết cho tôi 3 góc tiếp cận (angle) cho quảng cáo dựa
                    trên nội dung landing page này: [Sao chép và dán văn bản từ
                    landing page].
                  </aside>

                  <aside>
                    ©️ 10 góc tiếp cận (angle) để bán [sản phẩm] cho [khách hàng
                    lý tưởng] là gì?
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 10 điểm bán hàng chính của [sản phẩm]
                    cho [ngách].
                  </aside>

                  <aside>
                    ©️ Brainstorm 10 lý do tại sao [khách hàng lý tưởng] muốn
                    mua [sản phẩm].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">LinkedIn</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔝 Tối ưu Profile LinkedIn hiệu quả</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Bạn có thể viết phần &apos;giới thiệu&apos; trên LinkedIn
                    cho một [vai trò] trong [ngành] và phần đó có thông tin xác
                    thực sau:
                    <br />
                    -[Thông tin xác thực 1]
                    <br />
                    -[Thông tin xác thực 2]
                    <br />
                    -[Thông tin xác thực 3]
                    <br />
                    Viết ở ngôi thứ nhất, sử dụng giọng điệu [vui vẻ/chuyên
                    nghiệp/thư giãn/v.v.] và kết thúc bằng cách nói [&quot;Nếu
                    bạn muốn tôi giúp bạn, chỉ cần gửi cho tôi một tin nhắn cá
                    nhân&quot;].
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết phần &apos;giới thiệu&apos; trên LinkedIn
                    cho một [vai trò] trong [ngành] và phần đó có thông tin xác
                    thực sau:
                    <br />
                    -[Thông tin xác thực 1]
                    <br />
                    -[Thông tin xác thực 2]
                    <br />
                    -[Thông tin xác thực 3]
                    <br />
                    Viết nó bằng giọng văn của [tác giả].
                  </aside>

                  <aside>
                    ©️ Tôi có thể giới thiệu kiến thức chuyên môn của mình về
                    [chủ đề] trên LinkedIn theo một số cách nào?
                  </aside>

                  <aside>
                    ©️ Tôi nên xem xét những điều quan trọng nào trên trang
                    LinkedIn của mình để trở nên nổi bật?
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p></p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💭 Tạo ý tưởng cho các bài đăng trên Linkedin</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Hãy cho tôi 10 ý tưởng cho các bài đăng trên LinkedIn cho
                    một [vai trò] phục vụ [ngách].
                  </aside>

                  <aside>
                    ©️ 5 chủ đề thịnh hành cho [ngành] trên Linkedin là gì?
                  </aside>

                  <aside>
                    ©️ Tạo 10 angle khác nhau cho các bài đăng trên LinkedIn để
                    chia sẻ thông tin về [chủ đề].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 5 ý tưởng cho các bài đăng trên LinkedIn
                    có thể giúp tôi thể hiện chuyên môn của mình trong [ngành
                    hoặc chủ đề] và cung cấp thông tin có giá trị cho [đối tượng
                    mục tiêu].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>👯 Tận dụng các nhóm LinkedIn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một bài viết dài về [chủ đề] cho một nhóm LinkedIn
                    về [ngách].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi 10 ý tưởng nội dung cho một nhóm LinkedIn về
                    [chủ đề].
                  </aside>

                  <aside>
                    ©️ Brainstorm 10 cách tôi có thể sử dụng các nhóm LinkedIn
                    để quảng cáo [loại hình kinh doanh] của mình cho [ngách].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết bài đăng cho các nhóm LinkedIn trên
                    [điền vào chủ đề] để thu hút các thành viên và khơi dậy cuộc
                    trò chuyện không?”
                    <br />
                    2. “Tôi cần trợ giúp tạo nội dung cho các nhóm LinkedIn nói
                    chuyện với các chuyên gia trong [điền vào ngành]. Bạn có thể
                    giúp tôi không?
                    <br />
                    3. “Bạn có thể tạo các bài đăng cho các nhóm LinkedIn sẽ
                    định vị tôi là người có thẩm quyền trong [điền vào trường]
                    và thu hút khách hàng tiềm năng không?”
                    <br />
                    4. “Tôi đang tìm kiếm sự trợ giúp để viết bài đăng cho các
                    nhóm LinkedIn nhằm hướng lưu lượng truy cập đến trang web
                    của tôi và nâng cao nhận thức về thương hiệu của tôi. Bạn có
                    thể viết chúng cho tôi được không?”
                    <br />
                    5. “Bạn có thể tạo các bài đăng kích thích tư duy cho các
                    nhóm LinkedIn để thách thức các thành viên nghĩ khác về
                    [điền vào chủ đề] không?”
                    <br />
                    6. “Tôi cần trợ giúp viết bài cho các nhóm LinkedIn mang
                    tính thông tin và giáo dục, và điều đó sẽ giúp tôi khẳng
                    định mình là một nhà lãnh đạo tư tưởng trong [điền vào
                    trường/lĩnh vực].”
                    <br />
                    7. “Bạn có thể viết các bài đăng cho các nhóm LinkedIn để
                    giải quyết các điểm khó khăn chung trong [điền vào ngành] và
                    đưa ra các giải pháp mà các thành viên sẽ thấy có giá trị
                    không?”
                    <br />
                    8. “Tôi đang tìm kiếm sự trợ giúp để viết các bài đăng cho
                    các nhóm LinkedIn ngắn gọn và có tác động, đồng thời sẽ thu
                    hút sự chú ý của các chuyên gia bận rộn.”
                    <br />
                    9. “Bạn có thể tạo các bài đăng cho các nhóm LinkedIn để
                    giới thiệu kiến thức chuyên môn của tôi về [điền vào
                    trường/lĩnh vực] và nêu bật những lợi ích khi làm việc với
                    tôi không?”
                    <br />
                    10. “Tôi cần trợ giúp tạo các bài đăng hấp dẫn cho các nhóm
                    LinkedIn để bắt đầu các cuộc trò chuyện và khuyến khích các
                    thành viên chia sẻ suy nghĩ và kinh nghiệm của họ về [điền
                    vào chủ đề].”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💻 Chiến lược nội dung LinkedIn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo lịch xuất bản nội dung với 10 ý tưởng nội dung bao
                    gồm [chủ đề]. Bao gồm ngày xuất bản cho tháng 2 năm 2023 và
                    tháng 3 năm 2023.
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 10 chủ đề thú vị mà một [vai trò] nên
                    giải quyết trên LinkedIn để tạo nhận thức về các dịch vụ của
                    anh ấy.
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi 20 ý tưởng nội dung cho LinkedIn mà một [vai
                    trò] có thể sử dụng để quảng bá doanh nghiệp của anh ấy.
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết các chủ đề hoạt động tốt nhất cho [vai
                    trò] trên LinkedIn.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>👨‍💻 Tạo quảng cáo cho LinkedIn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết cho tôi 3 nội dung quảng cáo LinkedIn dựa trên
                    landing page này: [Sao chép và dán văn bản landing page].
                  </aside>

                  <aside>
                    ©️ Bạn có thể cung cấp các ví dụ về nội dung quảng cáo hiệu
                    quả để quảng cáo [sản phẩm] cho [khán giả] không? Hãy chắc
                    chắn rằng chúng [thuyết phục/vui tươi/cảm xúc] và đề cập đến
                    những lợi ích sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3]
                    <br />
                    Kết thúc bằng lời kêu gọi hành động nói [CTA]. Thêm 3 biểu
                    tượng cảm xúc vào nó.
                  </aside>

                  <aside>
                    ©️ Tôi đang tạo một chiến dịch quảng cáo cho LinkedIn để
                    quảng bá [sản phẩm] cho [ngách]. Hãy viết 3 bản thu hút sự
                    chú ý của khách hàng tiềm năng và thuyết phục họ mua hàng.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>#️⃣ Tạo Hashtag LinkedIn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể đề xuất một số hashtag LinkedIn có liên quan
                    cho bài đăng về [chủ đề/ngành] không?”
                    <br />
                    2. “Một số hashtag phổ biến trên LinkedIn có liên quan đến
                    [chủ đề/ngành] là gì?”
                    <br />
                    3. “Tôi đang định chia sẻ một bài đăng về [chủ đề/ngành]
                    trên LinkedIn. Bạn có thể tạo một số thẻ hashtag hiệu quả để
                    sử dụng không?”
                    <br />
                    4. “Tôi đang tìm các thẻ hashtag phổ biến để sử dụng trong
                    các bài đăng trên LinkedIn của mình liên quan đến [điền vào
                    chủ đề]. Bạn có thể giúp tôi được không?&quot;
                    <br />
                    5. “Bạn có thể tạo một số thẻ hashtag hiệu quả cho bài đăng
                    trên LinkedIn của tôi để quảng bá [điền vào sản phẩm/dịch
                    vụ] của tôi không?”
                    <br />
                    6. “Tôi cần một số thẻ hashtag dành riêng cho thị trường
                    ngách cho bài đăng trên LinkedIn của mình về [điền vào chủ
                    đề]. Bạn có thể gợi ý một chút không?”
                    <br />
                    7. “Bạn có thể đề xuất một số thẻ hashtag thịnh hành để sử
                    dụng trong bài đăng trên LinkedIn của tôi về [điền vào chủ
                    đề] không?”
                    <br />
                    8. “Tôi đang cố gắng nghĩ ra những thẻ hashtag tốt cho bài
                    đăng trên LinkedIn để quảng cáo [điền vào sản phẩm/dịch vụ]
                    của mình. Bạn có thể cho tôi một số ý tưởng?
                    <br />
                    9. “Bạn có thể đề xuất một số thẻ hashtag dành riêng cho
                    ngành cho bài đăng trên LinkedIn của tôi về [điền vào chủ
                    đề] không?”
                    <br />
                    10. “Tôi cần một số thẻ hashtag để tiếp cận nhiều đối tượng
                    hơn cho bài đăng trên LinkedIn nhằm quảng bá [điền sản
                    phẩm/dịch vụ] của tôi. Bạn có thể gợi ý một chút không?”
                    <br />
                    11. “Bạn có thể giúp tôi tìm một số thẻ hashtag thích hợp để
                    sử dụng trong bài đăng trên LinkedIn của tôi liên quan đến
                    [điền vào chủ đề] không?”
                    <br />
                    12. “Tôi muốn tăng khả năng hiển thị cho bài đăng trên
                    LinkedIn của mình về [điền vào chủ đề]. Bạn có thể đề xuất
                    một số thẻ hashtag hiệu quả để sử dụng không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🤖 Tự động hóa LinkedIn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết kịch bản cho bot tự động hóa LinkedIn tập trung vào
                    [tạo khách hàng tiềm năng/kết nối mạng] và có thể được tùy
                    chỉnh cho một công ty trong [ngành].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết những cách tốt nhất để sử dụng LinkedIn
                    để phát triển [loại công ty] của chúng tôi trong vòng [khán
                    giả].
                  </aside>

                  <aside>
                    ©️ Phát triển chiến lược tự động hóa tăng trưởng LinkedIn
                    cho một [loại hình kinh doanh] để đạt được [các mục tiêu
                    chính].
                  </aside>

                  <aside>
                    ©️ Mô tả 10 chiến lược hàng đầu dành cho các công ty [trong
                    ngành] để tăng cường sự hiện diện trực tuyến của họ và thu
                    hút nhiều khách hàng hơn trên LinkedIn.
                  </aside>

                  <aside>
                    ©️ Làm thế nào các chuyên gia [ngành/ngách] có thể sử dụng
                    LinkedIn để kết nối mạng và xây dựng thương hiệu cá nhân của
                    họ?
                  </aside>

                  <aside>
                    ©️ Tạo chiến lược tăng trưởng tự động cho LinkedIn. Tôi là
                    [mô tả vai trò] phục vụ [khách hàng lý tưởng] và mục tiêu
                    của tôi là [mô tả mục tiêu].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">YouTube Marketing</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>▶️ Viết kịch bản video YouTube</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tôi là một người làm sáng tạo nội dung chuyên về [chủ đề
                    của kênh bạn], tôi muốn làm kênh Youtube chia sẻ xung quanh
                    chủ đề [chủ đề bạn muốn làm trên kênh]. Hãy cho tôi kế hoạch
                    đăng bài cụ thể trong vòng 30 ngày.
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết một [loại văn bản] về chủ đề [chủ đề]
                    [chi tiết bổ sung]. Sau đó biến nó thành một kịch bản video
                    YouTube mạnh mẽ.
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết kịch bản video YouTube siêu hấp dẫn về
                    [chủ đề] không?
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết một bài blog dài 500 từ về [chủ đề], đề
                    cập đến những lợi ích sau: [Lợi ích 1] [Lợi ích 2] [Lợi ích
                    3] Sau đó biến nó thành một kịch bản video YouTube hấp dẫn.
                  </aside>
                  <h1 className="font-semibold">VÍ DỤ:</h1>
                  <p>
                    Tôi là một người làm sáng tạo nội dung chuyên về làm video,
                    tôi muốn làm kênh Youtube Short chia sẻ xung quanh chủ đề
                    làm video sao cho thu hút, tư duy làm video ngắn, xây dựng
                    thương hiệu cá nhân. Hãy cho tôi kế hoạch đăng bài cụ thể
                    trong vòng 30 ngày nhé!
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>💬 Viết tiêu đề video YouTube</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Brainstorm 5 tiêu đề thu hút sự chú ý cho văn bản này:
                    [sao chép và dán bản ghi của video].
                  </aside>

                  <aside>
                    ©️ Viết 5 tiêu đề thu hút sự chú ý cho video YouTube về [chủ
                    đề].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi ví dụ về các tiêu đề hấp dẫn cho video
                    YouTube về [chủ đề] sẽ khiến mọi người muốn nhấp vào và xem
                    video. Làm cho chúng theo phong cách [tạp chí hoặc tác giả].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🖥️ Viết mô tả video YouTube thân thiện với SEO</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết mô tả video YouTube dài 100 từ để thu hút [khán giả]
                    xem video về [chủ đề] và đề cập đến các từ khóa sau [từ khóa
                    1], [từ khóa 2], [từ khóa 3].
                  </aside>

                  <aside>
                    ©️ 10 từ khóa phổ biến xung quanh [chủ đề] là gì? Sử dụng
                    chúng để viết mô tả cho video YouTube nói về [chủ đề].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể giúp tôi tối ưu hóa mô tả video YouTube của
                    mình bằng các từ khóa có liên quan cho video của tôi trên
                    [điền vào chủ đề] không?”
                    <br />
                    2. “Tôi đang tìm kiếm sự hỗ trợ trong việc viết mô tả hấp
                    dẫn và thân thiện với SEO cho video YouTube mới nhất của tôi
                    về [điền vào chủ đề]. Bạn có thể giúp tôi không?&quot;
                    <br />
                    3. “Bạn có thể tạo mô tả video YouTube bao gồm các từ khóa
                    và cụm từ phù hợp để giúp video của tôi xếp hạng cao hơn
                    trong kết quả tìm kiếm cho [điền vào chủ đề] không?”
                    <br />
                    4. “Tôi cần một mô tả video trên YouTube sẽ thu hút đối
                    tượng mục tiêu của mình và cũng giúp cải thiện thứ hạng SEO
                    của video cho [điền vào chủ đề]. Bạn có thể giúp tôi không?
                    <br />
                    5. “Bạn có thể viết mô tả một cách chi tiết và hiệu quả về
                    mặt từ khóa cho video YouTube của tôi bao gồm [điền vào chủ
                    đề] và cũng bao gồm lời kêu gọi hành động không?”
                    <br />
                    6. “Tôi đang tìm trợ giúp viết mô tả thân thiện với SEO cho
                    video YouTube của mình trên [điền vào chủ đề]. Bạn có thể
                    tạo ra thứ gì đó hấp dẫn và nhiều thông tin không?”
                    <br />
                    7. “Bạn có thể giúp tôi viết mô tả video YouTube không chỉ
                    giải thích nội dung video của tôi mà còn bao gồm các từ khóa
                    và cụm từ có liên quan cho [điền vào chủ đề] không?”
                    <br />
                    8. “Tôi cần mô tả video trên YouTube để giúp video của tôi
                    xếp hạng cao hơn trong kết quả tìm kiếm cho [điền vào chủ
                    đề]. Bạn có thể viết thứ gì đó vừa mang tính thông tin vừa
                    được tối ưu hóa cho các công cụ tìm kiếm không?”
                    <br />
                    9. “Bạn có thể viết mô tả video YouTube bao gồm các từ khóa
                    có liên quan, tóm tắt nội dung video của tôi về [điền vào
                    chủ đề] và khuyến khích người xem xem video đó không?”
                    <br />
                    10. “Tôi đang tìm kiếm sự hỗ trợ trong việc viết mô tả hấp
                    dẫn và thân thiện với SEO cho video YouTube của mình trên
                    [điền vào chủ đề]. Bạn có thể giúp tôi tạo thứ gì đó thu hút
                    người xem và cũng cải thiện thứ hạng SEO của nó không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📜 Viết kịch bản video quảng cáo Youtube</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Bạn có thể viết kịch bản video quảng cáo YouTube cho
                    [loại văn bản] về chủ đề [chủ đề] [chi tiết bổ sung] không?
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết kịch bản video quảng cáo YouTube siêu hấp
                    dẫn về [chủ đề] không? Bắt đầu bằng cách nói &quot;Dừng lại!
                    Nếu bạn muốn kiếm tiền trực tuyến, điều này sẽ giúp
                    bạn.&quot; [Thay đổi bằng thanh chặn cuộn].
                  </aside>

                  <aside>
                    ©️ Viết dàn ý kịch bản cho video YouTube dài 2 phút để bán
                    [sản phẩm] cho [khán giả], đề cập đến các lợi ích sau:
                    <br />
                    [Lợi ích 1]
                    <br />
                    [Lợi ích 2]
                    <br />
                    [Lợi ích 3].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Kịch bản quảng cáo video YouTube nên dài bao lâu?”
                    <br />
                    2. “Định dạng của kịch bản quảng cáo video trên YouTube là
                    gì?”
                    <br />
                    3. “Làm cách nào tôi có thể làm cho kịch bản quảng cáo video
                    YouTube của mình trở nên hấp dẫn?”
                    <br />
                    4. “Làm cách nào tôi có thể làm cho kịch bản quảng cáo video
                    trên YouTube của mình trở nên thuyết phục?”
                    <br />
                    5. “Làm cách nào tôi có thể đo lường mức độ thành công của
                    kịch bản quảng cáo video trên YouTube của mình?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🖼️ Tạo ý tưởng Thumbnails Youtube thu hút</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết mười tiêu đề 4 chữ thể hiện [cảm xúc] sau [lợi ích
                    chính].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể đề xuất ý tưởng hình thu nhỏ theo chủ đề
                    [điền vào chủ đề] cho kênh YouTube của tôi không?”
                    <br />
                    2. “Tôi cần ý tưởng hình thu nhỏ sáng tạo cho video YouTube
                    mới của mình trên [điền vào chủ đề]. Bạn có thể giúp tôi
                    không?&quot;
                    <br />
                    3. “Bạn có thể tạo ý tưởng hình thu nhỏ bắt mắt cho kênh
                    YouTube nhắm mục tiêu [lấp đầy khán giả] của tôi không?”
                    <br />
                    4. “Tôi đang loay hoay tìm ý tưởng về hình thu nhỏ cho video
                    YouTube của mình trên [điền vào chủ đề]. Bạn có thể giúp tôi
                    với điều đó không?
                    <br />
                    5. “Bạn có thể đề xuất các thiết kế hình thu nhỏ cho kênh
                    YouTube của tôi phù hợp với thẩm mỹ thương hiệu của tôi
                    không?”
                    <br />
                    6. “Tôi cần ý tưởng về hình thu nhỏ cho video YouTube của
                    mình để khiến người xem muốn nhấp vào và xem. Bạn có thể tạo
                    ra một số ý tưởng?
                    <br />
                    7. “Bạn có thể nghĩ ra ý tưởng về hình thu nhỏ cho kênh
                    YouTube của tôi vừa hấp dẫn về mặt hình ảnh vừa mang lại
                    nhiều thông tin không?”
                    <br />
                    8. “Tôi sắp ra mắt một chuỗi video mới trên kênh YouTube của
                    mình và tôi cần ý tưởng về hình thu nhỏ sẽ thu hút sự chú ý
                    của người xem. Bạn có thể giúp tôi với đó?&quot;
                    <br />
                    9. “Bạn có thể đề xuất ý tưởng hình thu nhỏ cho các video
                    YouTube của tôi có kết hợp [điền vào phần tử], một tính năng
                    chính trong nội dung của tôi không?”
                    <br />
                    10. “Tôi muốn hình thu nhỏ của kênh YouTube của mình nổi bật
                    và độc đáo. Bạn có thể giúp tôi tạo ra một số ý tưởng sáng
                    tạo không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Twitter</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📈 Tối ưu Profile Twitter</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Làm cách nào tôi có thể tối ưu hóa Twitter của mình để
                    thu hút khách hàng tiềm năng và phát triển thương hiệu của
                    mình trong [ngành]?
                  </aside>

                  <aside>
                    ©️ Một số chiến lược hiệu quả để tăng mức độ tương tác của
                    người theo dõi và xây dựng sự hiện diện trực tuyến mạnh mẽ
                    cho [doanh nghiệp] bán [sản phẩm] của tôi cho [ngách] là gì?
                  </aside>

                  <aside>
                    ©️ Làm cách nào tôi có thể sử dụng Twitter để xây dựng mối
                    quan hệ với [đối tượng mục tiêu] và tạo khách hàng cho [loại
                    hình kinh doanh] của mình.
                  </aside>

                  <aside>
                    ©️ Một số cách sáng tạo để tối ưu hóa hồ sơ Twitter của tôi
                    nhằm thu hút [kiểu khách hàng] và thuyết phục họ [hành động
                    mong muốn].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🐧 Viết Tweets & Chủ đề</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một chuỗi Twitter về [chủ đề] cho [ngành].
                  </aside>

                  <aside>
                    ©️ Viết một tweet về [chủ đề]. Đưa ra một số gợi ý độc đáo
                    và không phổ biến.
                  </aside>

                  <aside>
                    ©️ Đưa ra ý kiến gây tranh cãi về [chủ đề], sau đó biến nó
                    thành chủ đề twitter.
                  </aside>

                  <aside>
                    ©️ Tweet về [chủ đề] theo phong cách [người có ảnh hưởng
                    hoặc tác giả].
                  </aside>

                  <aside>
                    ©️ Tạo 10 tweet về [chủ đề] cho [khán giả]. Sử dụng số liệu
                    thống kê và lập luận logic.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📊 Tận dụng xu hướng Twitter</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết một tweet sẽ viral và nâng cao nhận thức về [chủ
                    đề]. Cung cấp 10 gợi ý.
                  </aside>

                  <aside>
                    ©️ Hãy giúp tôi nghĩ ra một tiêu đề hấp dẫn và nội dung hấp
                    dẫn cho 10 tweet về [chủ đề].
                  </aside>

                  <aside>
                    ©️ Các chủ đề phổ biến trên Twitter về [chủ đề] là gì?
                  </aside>

                  <aside>
                    ©️ Loại nội dung nào nhận được nhiều tương tác nhất trên
                    Twitter?
                  </aside>

                  <aside>
                    ©️ Loại nội dung nào cho [ngành] viral trên Twitter?
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎞️ Tạo quảng cáo Twitter</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết 10 quảng cáo Twitter để quảng bá [sản phẩm] cho
                    [ngách].
                  </aside>

                  <aside>
                    ©️ Viết 10 quảng cáo Twitter để quảng bá [sản phẩm] cho
                    [ngách]. Sử dụng công thức AIDA.
                  </aside>

                  <aside>
                    ©️ Viết 10 quảng cáo Twitter để quảng bá [sản phẩm] cho
                    [ngách]. Sử dụng công thức PAS.
                  </aside>

                  <aside>
                    ©️ Viết 10 quảng cáo Twitter để quảng bá [sản phẩm] cho
                    [ngách]. Bắt đầu với giọng điệu vui tươi nhưng kết thúc bằng
                    sự khan hiếm.
                  </aside>

                  <aside>
                    ©️ Đề xuất 5 angle quảng cáo Twitter để bán [sản phẩm] cho
                    [ngách]. Đảm bảo các angle kết nối ở mức độ cảm xúc với
                    khách hàng tiềm năng.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🛞 Làm cho Tweet của bạn viral</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết 10 tweet có cơ hội viral cao trong [ngách].
                  </aside>

                  <aside>
                    ©️ Tối ưu hóa tweet này để viral hơn: [sao chép và dán
                    tweet].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 5 đặc điểm của các tweet viral về [chủ
                    đề].
                  </aside>

                  <aside>
                    ©️ Tạo một tweet thu hút sự chú ý xung quanh [chủ đề].
                  </aside>

                  <aside>
                    ©️ Tạo 3 tweet sẽ được chia sẻ rộng rãi bởi những người có
                    ảnh hưởng trong [ngành]. Đảm bảo chúng thu hút [khán giả] và
                    khuyến khích họ chia sẻ tweet.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📈 Tối ưu tăng trưởng Twitter</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể đề xuất một số chiến lược để tăng lượng người
                    theo dõi trên Twitter của tôi không?”
                    <br />
                    2. “Tôi nên chia sẻ những loại nội dung nào trên Twitter để
                    thu hút khán giả của mình?”
                    <br />
                    3. “Bạn có thể giúp tôi xác định thời điểm tốt nhất để đăng
                    lên Twitter để tiếp cận đối tượng mục tiêu của mình không?”
                    <br />
                    4. “Làm cách nào tôi có thể sử dụng quảng cáo Twitter để
                    tiếp cận nhiều người hơn và tăng lượng người theo dõi của
                    mình?”
                    <br />
                    5. “Bạn có thể đề xuất một số cuộc trò chuyện trên Twitter
                    hoặc thẻ hashtag mà tôi nên tham gia để phát triển mạng lưới
                    của mình không?”
                    <br />
                    6. “Làm cách nào tôi có thể tận dụng phân tích Twitter để
                    theo dõi hiệu suất và tối ưu hóa chiến lược của mình?”
                    <br />
                    7. “Một số cách sáng tạo để sử dụng Twitter để quảng bá
                    thương hiệu hoặc doanh nghiệp của tôi là gì?”
                    <br />
                    8. “Bạn có thể giúp tôi tạo các tweet hấp dẫn sẽ nhận được
                    nhiều tương tác và lượt retweet hơn không?”
                    <br />
                    9. “Làm cách nào tôi có thể sử dụng Twitter để xây dựng mối
                    quan hệ với những người có ảnh hưởng và những người dẫn đầu
                    ngành trong lĩnh vực của mình?”
                    <br />
                    10. “Một số phương pháp hay nhất dành cho Twitter mà tôi nên
                    tuân theo để tối đa hóa tiềm năng phát triển của mình là
                    gì?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">SEO</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>⌨️ Tạo danh sách từ khóa</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo danh sách 10 ý tưởng từ khóa về [chủ đề].
                    <br />
                    Tùy chọn: Chỉ đề xuất các từ khóa có khối lượng lớn và mức
                    độ cạnh tranh từ thấp đến trung bình.
                    <br />
                    <br />
                    Tùy chọn: Nhóm danh sách từ khóa này theo các giai đoạn phễu
                    cho dù chúng ở đầu phễu, giữa phễu hay cuối phễu (dựa trên
                    tìm kiếm trước đó).
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách 10 blog xếp hạng hàng đầu về từ khóa
                    [keyword]. [Đề cập đến URL].
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách các chủ đề phù hợp liên quan đến [chủ
                    đề].
                  </aside>

                  <aside>
                    ©️ Cung cấp 10 từ khóa đuôi dài liên quan đến [chủ đề]. Khớp
                    từng từ khóa với bất kỳ loại nào trong 4 loại mục đích tìm
                    kiếm.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔏 Tạo các bài viết hấp dẫn trên blog</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Bạn có thể viết một bài blog [số] từ về [chủ đề], phác
                    thảo [lợi ích] của [sản phẩm] cho [người đọc] không?
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết một bài blog [cho/chống lại][chủ đề] từ
                    quan điểm của [khách hàng lý tưởng]. Trước khi bạn làm như
                    vậy, hãy nêu những lợi ích của việc đọc bài báo.
                  </aside>

                  <aside>
                    ©️ Bạn có thể viết một bài blog [số] từ với giọng điệu
                    [chuyên nghiệp/cảm xúc/thú vị/vui vẻ] giải thích lợi ích của
                    [chủ đề] cho [người đọc]. Bài viết nên bắt đầu bằng cách sử
                    dụng công thức PAS để buộc người đọc phải đọc toàn bộ bài
                    viết và bao gồm lời kêu gọi hành động trong đoạn cuối đề cập
                    đến [ưu đãi].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết một bài blog về lợi ích của [sản
                    phẩm/dịch vụ/ý tưởng] và cách nó có thể cải thiện [lĩnh vực
                    cụ thể của cuộc sống/kinh doanh] không?”
                    <br />
                    2. “Bạn có thể tạo một bài blog phác thảo các xu hướng hàng
                    đầu trong [ngành/ngách] và cung cấp thông tin chi tiết có
                    thể hành động về cách luôn dẫn đầu cuộc chơi không?”
                    <br />
                    3. “Bạn có thể viết một bài blog đề cập đến [vấn đề/thử
                    thách] phổ biến mà [đối tượng mục tiêu] gặp phải và đưa ra
                    các giải pháp thiết thực không?”
                    <br />
                    4. “Bạn có thể tạo một bài blog nêu bật những câu chuyện
                    thành công của [cá nhân/tổ chức], những người đã tạo ra tác
                    động đáng kể trong ngành hoặc cộng đồng của họ không?”
                    <br />
                    5. “Bạn có thể viết một bài blog hướng dẫn toàn diện về cách
                    [đạt được mục tiêu cụ thể/vượt qua thử thách cụ thể] bằng
                    hướng dẫn từng bước không?”
                    <br />
                    6. “Bạn có thể tạo một bài blog phân tích [lịch sử/tình
                    trạng hiện tại/tương lai] của [ngành/ngách] và dự đoán những
                    thay đổi nào có thể xảy ra trong tương lai gần không?”
                    <br />
                    7. “Bạn có thể viết một bài blog đưa ra các mẹo và chiến
                    lược để [cải thiện kỹ năng cụ thể/khía cạnh cuộc sống] và
                    cung cấp các ví dụ thực tế về những người đã thực hiện thành
                    công các chiến lược này không?”
                    <br />
                    8. “Bạn có thể tạo một bài đăng cung cấp đánh giá chuyên sâu
                    về [sản phẩm/dịch vụ] và đưa ra đánh giá trung thực về những
                    lợi ích và hạn chế của nó không?”
                    <br />
                    9. “Bạn có thể viết một bài blog đề cập đến những quan niệm
                    sai lầm hoặc lầm tưởng phổ biến về [chủ đề/ngành] và cung
                    cấp thông tin chính xác để xua tan những quan niệm sai lầm
                    này không?”
                    <br />
                    10. “Bạn có thể tạo một bài blog mô tả [nhân vật/nhà đổi mới
                    nổi bật] trong [ngành/ngách] và cung cấp thông tin chi tiết
                    về lộ trình nghề nghiệp, thành tích và chiến lược thành công
                    của họ không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📌 Thực hiện tối ưu SEO</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo danh sách 10 ý tưởng từ khóa về [chủ đề].
                    <br />
                    Tùy chọn: Chỉ đề xuất các từ khóa có khối lượng lớn và mức
                    độ cạnh tranh từ thấp đến trung bình.
                    <br />
                    <br />
                    Tùy chọn: Nhóm danh sách từ khóa này theo các giai đoạn phễu
                    cho dù chúng ở đầu phễu, giữa phễu hay cuối phễu (dựa trên
                    tìm kiếm trước đó).
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách 10 blog xếp hạng hàng đầu về từ khóa
                    [keyword]. [Chèn URL].
                  </aside>

                  <aside>
                    ©️ Đề xuất ý tưởng chủ đề blog cho [chủ đề] có thể xếp hạng
                    trên Google.
                  </aside>

                  <aside>
                    ©️ Viết dàn ý blog chi tiết về [chủ đề] với H2, H3, tiêu đề
                    phụ và gạch đầu dòng.
                  </aside>

                  <aside>
                    ©️ Cung cấp danh sách các chủ đề phù hợp liên quan đến [chủ
                    đề].
                  </aside>

                  <aside>
                    ©️ Ai sẽ là 3 đối tượng hàng đầu mà khán giả quan tâm nhất
                    về [chủ đề] để nhắm mục tiêu trên Google?
                  </aside>

                  <aside>
                    ©️ Cung cấp 10 từ khóa đuôi dài liên quan đến [chủ đề]. Khớp
                    từng từ khóa với bất kỳ loại nào trong 4 loại mục đích tìm
                    kiếm.
                  </aside>

                  <aside>
                    ©️ Giúp tôi tạo &apos;how-to schema markup&apos; cho các
                    bước sau về [chủ đề]. Xác định đối tượng mục tiêu của bạn,
                    Chọn chủ đề, Nghiên cứu từ khóa.
                  </aside>

                  <aside>
                    ©️ Giúp tôi viết đánh dấu dữ liệu có cấu trúc cho [URL].
                  </aside>

                  <aside>
                    ©️ Giúp tôi thực hiện phân tích ý nghĩa cho nội dung [nội
                    dung] sau đây.
                  </aside>

                  <aside>
                    ©️ Viết mã HTML cho Page Schema Markup Câu hỏi thường gặp
                    cho câu hỏi và câu trả lời sau: [câu hỏi] [trả lời].
                  </aside>

                  <aside>
                    ©️ Viết các URL thân thiện với người dùng cho từ khóa này
                    trên tên miền [domain] cho các từ khóa sau - [keywords].
                  </aside>

                  <aside>
                    ©️ Liệt kê đối tượng mục tiêu với các chi tiết cá nhân cho
                    từ khóa [từ khóa].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📅 Tạo lịch nội dung</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tạo lịch xuất bản nội dung với 10 ý tưởng nội dung bao
                    gồm [từ khóa]. Bao gồm số lượng từ được đề xuất và ngày xuất
                    bản cho tháng 2 năm 2023 và tháng 3 năm 2023.
                  </aside>

                  <aside>
                    ©️ Giúp tôi với danh sách các sáng kiến về kế hoạch phân
                    phối nội dung cho [URL].
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể tạo lịch nội dung cho [tháng/quý/năm] tiếp
                    theo bao gồm [số lượng cụ thể] các bài đăng trên blog, [số
                    lượng cụ thể] các bài đăng trên mạng xã hội và [số lượng cụ
                    thể] các bản tin email không?”
                    <br />
                    2. “Bạn có thể giúp tôi đưa ra danh sách [chủ đề/từ khóa] có
                    liên quan đến [ngành/ngành/ngành/đối tượng mục tiêu] của tôi
                    và có thể được sử dụng để tạo nhiều loại nội dung không?”
                    <br />
                    3. “Bạn có thể cung cấp đề xuất cho các loại nội dung cụ thể
                    để tạo, chẳng hạn như đồ họa thông tin, video, hội thảo trên
                    web hoặc sách điện tử và cho biết chúng nên được chia sẻ
                    trên kênh nào không?”
                    <br />
                    4. “Bạn có thể giúp tôi xác định các ngày và sự kiện quan
                    trọng có liên quan đến doanh nghiệp của tôi và đề xuất các ý
                    tưởng nội dung có thể gắn liền với những ngày đó không?”
                    <br />
                    5. “Bạn có thể tạo chủ đề hàng tuần hoặc hàng tháng cho nội
                    dung của tôi và đề xuất các chủ đề phù hợp với chủ đề đó
                    không?”
                    <br />
                    6. “Bạn có thể giúp tôi sắp xếp thứ tự ưu tiên cho các ý
                    tưởng nội dung của mình dựa trên tác động tiềm tàng, khả
                    năng tạo dễ dàng và mức độ phù hợp với mục tiêu kinh doanh
                    của chúng không?”
                    <br />
                    7. “Bạn có thể đề xuất các cách để sử dụng lại nội dung hiện
                    có, chẳng hạn như biến một bài đăng blog thành video hoặc đồ
                    họa thông tin thành một bài đăng trên mạng xã hội không?”
                    <br />
                    8. “Bạn có thể giúp tôi lập lịch đăng nhất quán và xác định
                    thời điểm tối ưu để đăng trên mỗi kênh truyền thông xã hội
                    không?”
                    <br />
                    9. “Bạn có thể đề xuất các công cụ và tài nguyên có thể giúp
                    tôi hợp lý hóa quy trình tạo và phân phối nội dung của mình
                    không?”
                    <br />
                    10. “Bạn có thể giúp tôi theo dõi và phân tích hiệu suất nội
                    dung của mình cũng như đề xuất các cách tối ưu hóa nội dung
                    đó để tương tác và chuyển đổi tốt hơn không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">TikTok</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📽️ Viết kịch bản quảng cáo TikTok</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Vui lòng viết quảng cáo TikTok quảng bá [sản phẩm] cho
                    [khán giả].
                  </aside>

                  <aside>
                    ©️ Tôi đang cố gắng quảng cáo [sản phẩm] của mình trên
                    TikTok. Bạn có thể giúp tôi viết một kịch bản cho một video
                    sáng tạo và hấp dẫn để giới thiệu các tính năng và lợi ích
                    của nó không?
                  </aside>

                  <aside>
                    ©️ Tôi muốn tạo một video TikTok viral sử dụng sự hài hước
                    để quảng bá [sản phẩm] cho [khán giả]. Bạn có thể giúp tôi
                    viết một kịch bản hài hước và dễ hiểu không?
                  </aside>

                  <aside>
                    ©️ Tạo kịch bản cho quảng cáo TikTok bằng công thức PAS. Nó
                    sẽ thúc đẩy [ưu đãi] cho [ngách].
                  </aside>

                  <aside>
                    ©️ Tạo kịch bản cho quảng cáo TikTok bằng công thức AIDA. Nó
                    sẽ thúc đẩy [ưu đãi] cho [ngách].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🔎 Nghiên cứu đối tượng của bạn trên TikTok</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Tôi là một người làm sáng tạo nội dung chuyên về [chủ đề
                    của kênh bạn], tôi muốn làm kênh TikTok chia sẻ xung quanh
                    chủ đề [chủ đề bạn muốn làm trên kênh]. Hãy cho tôi kế hoạch
                    đăng bài cụ thể trong vòng 30 ngày.
                  </aside>

                  <aside>
                    ©️ Những thẻ hashtag nào là tốt nhất để sử dụng cho bài đăng
                    trên TikTok về [chủ đề]?
                  </aside>

                  <aside>
                    ©️ Một số thẻ hashtag hợp xu hướng trên TikTok về [chủ đề]
                    là gì?
                  </aside>

                  <aside>
                    ©️ Loại nội dung nào phổ biến trên TikTok xung quanh [chủ
                    đề]?
                  </aside>

                  <aside>
                    ©️ Loại nội dung nào phổ biến trên TikTok xung quanh [khán
                    giả]?
                  </aside>
                  <h1 className="font-semibold">VÍ DỤ:</h1>
                  <p>
                    Tôi là một người làm sáng tạo nội dung chuyên về làm video,
                    tôi muốn làm kênh TikTok chia sẻ xung quanh chủ đề làm video
                    sao cho thu hút, tư duy làm video ngắn, xây dựng thương hiệu
                    cá nhân. Hãy cho tôi kế hoạch đăng bài cụ thể trong vòng 30
                    ngày nhé!
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>❤️‍🔥 Tạo ý tưởng nội dung TikTok hấp dẫn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Hãy cho tôi 10 ý tưởng để đăng trên TikTok cho [loại hình
                    kinh doanh].
                  </aside>

                  <aside>
                    ©️ Tạo chú thích bài đăng TikTok cho [sản phẩm hoặc chủ đề].
                  </aside>

                  <aside>
                    ©️ Những xu hướng hàng đầu trên TikTok xung quanh [chủ đề]
                    là gì?
                  </aside>

                  <aside>
                    ©️ Brainstorm 10 ý tưởng nội dung cho TikTok để quảng bá
                    [sản phẩm hoặc chủ đề].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi những ý tưởng rất [hài hước/gây tranh
                    cãi/thời thượng] cho một tài khoản TikTok nói về [chủ đề].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Podcast</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📻 Tạo câu hỏi cho cuộc phỏng vấn Podcast của bạn</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Liệt kê 10 câu hỏi để hỏi [kiểu người] trong podcast về
                    [chủ đề].
                  </aside>

                  <aside>
                    ©️ Cung cấp 10 tiêu đề podcast hấp dẫn và lôi cuốn về [chủ
                    đề] cho [khán giả].
                  </aside>

                  <aside>©️ [khán giả] muốn biết gì về [khách]?</aside>

                  <aside>
                    ©️ Brainstorm 20 câu hỏi tôi có thể hỏi một nhân vật nổi bật
                    trong thế giới [ngành] về [chủ đề].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🎤 Viết kịch bản Podcast</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể viết kịch bản cho tập podcast sắp tới của tôi
                    về [chủ đề] không?”
                    <br />
                    2. “Tôi cần một kịch bản cho podcast của mình về [chủ đề].
                    Bạn có thể giúp tôi không?&quot;
                    <br />
                    3. “Tôi muốn tạo một tập podcast về [chủ đề]. Bạn có thể
                    viết kịch bản cho tôi không?
                    <br />
                    4. “Làm cách nào tôi có thể sắp xếp kịch bản của mình cho
                    một podcast về [chủ đề] cho [khán giả]?
                    <br />
                    5. “Bạn có thể tạo cho tôi một kịch bản podcast hấp dẫn,
                    nhiều thông tin và giải trí không? Chủ đề là [chủ đề] cho
                    [khán giả]”
                    <br />
                    6. “Bạn có thể giúp tôi nghĩ ra chủ đề cho tập podcast phù
                    hợp với khán giả và phù hợp với thương hiệu của tôi không?”
                    <br />
                    7. “Bạn có thể cung cấp cho tôi dàn ý về những điểm chính
                    cần trình bày trong tập podcast của tôi, cùng với các gợi ý
                    về câu chuyện, ví dụ và trích dẫn để đưa vào không?”
                    <br />
                    8. “Bạn có thể giúp tôi cấu trúc tập podcast của mình bằng
                    cách cung cấp phần mở đầu thu hút người nghe, phần giới
                    thiệu rõ ràng, phần chính bao gồm các điểm chính và phần kết
                    để kết thúc tập và khuyến khích người nghe hành động không?”
                    <br />
                    9. “Bạn có thể giúp tôi nghĩ ra những câu hỏi để hỏi khách
                    của mình không, nếu tôi đang phỏng vấn ai đó trên podcast?”
                    <br />
                    10. “Bạn có thể đề xuất các cách để làm cho tập podcast của
                    tôi hấp dẫn và tương tác hơn, chẳng hạn như sử dụng hiệu ứng
                    âm thanh, âm nhạc hoặc sự tham gia của khán giả không?”
                    <br />
                    11. “Bạn có thể cung cấp cho tôi các mẹo về cách nói rõ
                    ràng, tự tin và nhiệt tình trong tập podcast của tôi không?”
                    <br />
                    12. “Bạn có thể giúp tôi tối ưu hóa tập lệnh podcast của
                    mình cho SEO bằng cách đề xuất các từ khóa và cụm từ có liên
                    quan để đưa vào không?”
                    <br />
                    13. “Bạn có thể giúp tôi nghĩ ra một tiêu đề và mô tả hấp
                    dẫn cho tập podcast của mình để khuyến khích mọi người lắng
                    nghe và chia sẻ không?”
                    <br />
                    14. “Bạn có thể cung cấp cho tôi ví dụ về các tập podcast
                    thành công trong ngành hoặc thị trường ngách của tôi để tôi
                    có thể học hỏi không?”
                    <br />
                    15. “Bạn có thể giúp tôi chỉnh sửa và đọc lại kịch bản
                    podcast của mình để đảm bảo rằng nó được viết tốt và không
                    có lỗi không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>🛃 Tiếp cận khách Podcast</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Bạn có thể nghĩ ra một thông điệp ấm áp cho một người,
                    mời họ tham gia podcast của tôi có tên [tên podcast] không?
                    Chủ đề của podcast là [chủ đề] và những lợi ích chính của
                    việc nói đồng ý là [lợi ích 1], [lợi ích 2], [lợi ích 3].
                    Kết thúc bằng cách nói &quot;nếu điều này nghe có vẻ thú vị,
                    vui lòng cho tôi biết và tôi sẽ gửi lời mời theo lịch&quot;.
                  </aside>
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Bạn có thể giúp tôi viết một thông điệp tiếp cận để mời
                    khách xem podcast của tôi trên [điền vào chủ đề] không?”
                    <br />
                    2. “Tôi cần một thông điệp thuyết phục để mời các chuyên gia
                    trong ngành làm khách mời trên podcast của tôi. Bạn có thể
                    viết nó cho tôi không?
                    <br />
                    3. “Bạn có thể tạo một thông báo mời để gửi đến những khách
                    podcast tiềm năng là những nhà lãnh đạo tư tưởng trong [điền
                    vào ngành] không?”
                    <br />
                    4. “Tôi đang tìm cách tiếp cận khán giả và mời họ tham gia
                    podcast của tôi bao gồm [điền vào chỗ thích hợp]. Bạn có thể
                    giúp tôi không?&quot;
                    <br />
                    5. “Bạn có thể giúp tôi viết một thông điệp tiếp cận cộng
                    đồng để mời họ tham gia podcast tập trung vào [điền vào chủ
                    đề] của tôi không?”
                    <br />
                    6. “Tôi cần một thông điệp hấp dẫn để gửi đến những vị khách
                    tiềm năng mời họ tham gia podcast của tôi. Bạn có thể viết
                    nó cho tôi không?
                    <br />
                    7. “Bạn có thể giúp tôi viết một thông điệp tiếp cận nhằm
                    thuyết phục khách tham gia podcast của tôi và chia sẻ kiến
                    thức chuyên môn của họ về [điền vào lĩnh vực] không?”
                    <br />
                    8. “Tôi đang tìm cách mời khách tham gia podcast khám phá
                    [điền vào chỗ trống] của mình. Bạn có thể giúp tôi
                    không?&quot;
                    <br />
                    9. “Bạn có thể viết cho tôi một thông điệp tiếp cận cộng
                    đồng để thuyết phục khách tham gia podcast của tôi và chia
                    sẻ những hiểu biết độc đáo của họ về [điền vào chủ đề]
                    không?”
                    <br />
                    10. “Tôi cần một thông điệp hiệu quả để gửi tới những vị
                    khách tiềm năng để mời họ tham gia podcast của tôi về [điền
                    vào chủ đề]. Bạn có thể viết nó cho tôi không?
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <h2 className="text-center font-semibold text-medium underline py-4">Social Media</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📄 Brainstorm các chủ đề cho webinar hoặc hội thảo</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Đề xuất 10 chủ đề cho hội thảo trên web (webinar) để thu
                    hút [khách hàng lý tưởng] đến [cung cấp].
                  </aside>

                  <aside>
                    ©️ Viết 20 tiêu đề cho hội thảo trên web (webinar) về [chủ
                    đề] cho [khán giả].
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi biết 10 ý tưởng sẽ thú vị cho [khách hàng lý
                    tưởng] về [chủ đề].
                  </aside>

                  <aside>
                    ©️ Suy nghĩ về 20 chủ đề cho một hội thảo sẽ thu hút [khách
                    hàng lý tưởng] và trình bày cho họ giải pháp cho [vấn đề] để
                    họ có thể [đạt được trạng thái mong muốn].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  📄 Viết tiêu đề thu hút sự chú ý cho các bài đăng trên Social
                  Media
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Viết 3 tiêu đề thu hút sự chú ý cho bài đăng trên mạng xã
                    hội này: [sao chép và dán văn bản của bài đăng].
                  </aside>

                  <aside>
                    ©️ Viết 5 tiêu đề thu hút sự chú ý cho một bài đăng [nền
                    tảng] về [chủ đề] cho [khán giả].
                  </aside>

                  <aside>
                    ©️ Cung cấp cho tôi 3 ví dụ về dòng tiêu đề thu hút sự chú ý
                    cho [loại sản phẩm].
                  </aside>

                  <aside>
                    ©️ Một số ví dụ về tiêu đề truyền tải hiệu quả ý chính của
                    [chủ đề] là gì?
                  </aside>

                  <aside>
                    ©️ Hãy cho tôi ví dụ về các tiêu đề hấp dẫn cho một [chủ đề
                    hoặc sản phẩm] sẽ khiến mọi người muốn [hành động mong
                    muốn]. Làm cho nó giống phong cách BuzzFeed.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>📄 Thiết kế hình ảnh cho quảng cáo trên mạng xã hội</span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Câu lệnh 1: Loại hình ảnh nào sẽ đại diện tốt nhất cho
                    [chủ đề]?
                    <br />
                    <br />
                    Câu lệnh 2: Liệt kê các tính từ của [hình ảnh hoặc cảnh bạn
                    chọn].
                    <br />
                    <br />
                    Câu lệnh 3: Mô tả chi tiết [hình ảnh hoặc cảnh bạn chọn].
                    <br />
                    <br />
                    Nhập tất cả thông tin đó vào Trình tạo nghệ thuật AI như
                    Dall-E hoặc Midjourney.
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  📄 Tạo Mood Board tuyệt đẹp cho Instagram hoặc Pinterest
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">CÂU LỆNH MỞ:</h1>
                  <p>
                    1. “Loại hình ảnh nào sẽ phù hợp trên moodboard [Pinterest
                    hoặc Instagram] xung quanh [chủ đề]?”
                    <br />
                    2. “Tôi là nhà thiết kế nội thất. Bạn sẽ thiết kế moodboard
                    về [chủ đề] cho [nền tảng] như thế nào?”
                    <br />
                    3. “Hình ảnh moodboard hợp xu hướng cho [chủ đề] trên [nền
                    tảng] là gì”
                    <br />
                    4. “Hãy hành động như một nhà thiết kế đồ họa. Bạn sẽ tạo
                    moodboard cho [nền tảng] về [chủ đề] như thế nào?”
                    <br />
                    5. “Tôi có thể nói gì với DALL-E để tạo moodboard cho [nền
                    tảng] về [chủ đề]?”
                    <br />
                    6. “Bạn có thể đề xuất ý tưởng cho moodboard cho [điền vào
                    chủ đề] trên Instagram hoặc Pinterest không?”
                    <br />
                    7. “Tôi cần một chút cảm hứng cho moodboard trên Instagram
                    hoặc Pinterest của mình liên quan đến [điền vào chủ đề]. Bạn
                    có thể giúp tôi không?&quot;
                    <br />
                    8. “Bạn có thể tạo một số ý tưởng sáng tạo cho moodboard
                    trên Instagram hoặc Pinterest phản ánh sự rung cảm [điền
                    tính từ] mà tôi đang theo đuổi không?”
                    <br />
                    9. “Tôi đang tìm kiếm một số ý tưởng mới cho moodboard trên
                    Instagram hoặc Pinterest của mình dựa trên [điền chủ đề].
                    Bạn có đề nghị gì?&quot;
                    <br />
                    10. “Bạn có thể lên ý tưởng cho moodboard trên Instagram
                    hoặc Pinterest để giới thiệu [điền sản phẩm hoặc dịch vụ]
                    mang tính nghệ thuật và hấp dẫn về mặt hình ảnh không?”
                    <br />
                    11. “Tôi cần một số ý tưởng cho moodboard trên Instagram
                    hoặc Pinterest phản ánh cảm xúc [chèn cảm xúc] mà tôi muốn
                    truyền tải. Bạn có thể giúp tôi không?&quot;
                    <br />
                    12. “Bạn có thể đề xuất moodboard về các chủ đề và yếu tố
                    hình ảnh trên Instagram hoặc Pinterest phù hợp với bản sắc
                    và giá trị thương hiệu của tôi không?”
                    <br />
                    13. “Tôi đang tìm ý tưởng cho moodboard trên Instagram hoặc
                    Pinterest nắm bắt được bản chất của [điền chủ đề] theo cách
                    sáng tạo và thú vị. Bạn đề xuất điều gì?&quot;
                    <br />
                    14. “Bạn có thể giúp tôi lên ý tưởng cho một moodboard trên
                    Instagram hoặc Pinterest thu hút [điền vào đối tượng mục
                    tiêu] và giới thiệu thương hiệu của tôi theo một cách độc
                    đáo không?”
                    <br />
                    15. “Tôi cần một chút cảm hứng cho moodboard trên Instagram
                    hoặc Pinterest của mình liên quan đến [điền vào chủ đề]. Bạn
                    có thể đề xuất một số yếu tố hình ảnh và cách phối màu phù
                    hợp không?”
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  📄 Nghiên cứu Hashtag Instagram để tiếp cận nhiều đối tượng
                  hơn
                </span>
                <div
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                >
                  <ChevronDownIcon />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black text-left item-center justify-center flex flex-col space-y-4">
                  <h1 className="font-semibold">
                    CÂU LỆNH ĐIỀN VÀO CHỖ TRỐNG:
                  </h1>
                  <aside>
                    ©️ Hãy cho tôi 30 thẻ hashtag được nhắm mục tiêu cho một bài
                    đăng trên Instagram về [chủ đề].
                  </aside>

                  <aside>
                    ©️ Một số hashtag phổ biến trên Instagram về [chủ đề] cho
                    [khán giả] là gì?
                  </aside>

                  <aside>
                    ©️ Tôi đang tìm cách xây dựng một cộng đồng trên Instagram
                    và tiếp cận nhiều đối tượng hơn. Hãy nghĩ ra một danh sách
                    các thẻ bắt đầu bằng # sẽ thu hút những người quan tâm đến
                    [chủ đề].
                  </aside>

                  <aside>
                    ©️ Bạn có thể đề xuất các thẻ hashtag có liên quan cho bài
                    đăng Instagram sắp tới của tôi về [chủ đề] không?
                  </aside>

                  <aside>
                    ©️ Giúp tôi tìm các thẻ hashtag phổ biến và có liên quan cho
                    bài đăng trên Instagram của tôi bằng cách sử dụng từ khóa
                    [chèn từ khóa].
                  </aside>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Prompts;
