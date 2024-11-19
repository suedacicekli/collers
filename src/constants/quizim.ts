export const QUESTION_SERVICE_BASE_URL = "https://jsonplaceholder.typicode.com";

export const QUESTIONS_SIZE = 10;

export const SECOND_FOR_EACH_QUESTION = 30;

export const ANSWER_ENABLE_THRESHOLD = 20;

export const QUIZ_RULES = [
    {
        title: "Soru Süresi",
        description: "Her soru ekranda 30 saniye boyunca kalacaktır.",
    },
    {
        title: "Cevap Verme Süresi",
        description:
            "Sorunun ekrana gelmesinin ilk 10 saniyesinde cevap şıklarına tıklayamazsınız. 10. saniyeden sonra cevap vermeye başlayabilirsiniz.",
    },
    {
        title: "Sonraki Soruya Geçiş",
        description:
            "30. saniyeden sonra otomatik olarak bir sonraki soruya geçilecektir. Soruyu cevaplarsanız 10. saniyeden sonra bir sonraki soruya geçebilirsiniz. Cevaplanmamış sorular boş olarak değerlendirilir.",
    },
    {
        title: "Geri Dönüş",
        description:
            "Geçmiş sorulara geri dönme imkanı bulunmamaktadır. Her soruya sırayla ve zamanında cevap vermeniz gerekmektedir.",
    },
    {
        title: "Sonuçlar",
        description: "Testin sonunda, verdiğiniz yanıtlar tablo halinde gösterilecektir.",
    },
];
