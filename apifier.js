function pageFunction(context) {
    // called on every page the crawler visits, use it to extract data from it
    var $ = context.jQuery;
    var request = context.request;
    var url = request.url;
    var id = request.id;
    var foreignId = request.referrerId;
    var type, name, desc;
    var population, students, int_students, ranked_universities, academic_year;
    var about, services, student_life, city, country, ranking, bachelors, inst_type;
    var app_deadline, duration, int_tuition_year, nat_tuition_year, language, currency, ielts, toefl_pbt, toefl_ibt, study_req, study_contents, study_desc;
    var result;

    if (url.indexOf('countries') >= 0) {
        type = 'country';
        name = $('#LinkTrail ul li:eq(2)').text();
        population = $('#CountryFacts ul li:eq(0) .QuickFactsData').text();
        students = $('#CountryFacts ul li:eq(1) .QuickFactsData').text();
        int_students = $('#CountryFacts ul li:eq(2) .QuickFactsData').text();
        ranked_universities = $('#CountryFacts ul li:eq(4) .QuickFactsData').text();
        academic_year = $('#CountryFacts ul li:eq(5) .QuickFactsData').text();
    }

    if (url.indexOf('universities') >= 0) {
        type = 'university';
        name = $('#OrganisationHeader [itemprop="name"]').text();
        city = $('#OrganisationHeader [itemprop="addressLocality"]').text();
        country = $('#OrganisationHeader [itemprop="addressCountry"]').text();
        desc = $('#ShortDescription').text();
        about = $('#About').text();
        services = $('#Services').text();
        student_life = $('#StudentLife').text();
        ranking = $('#QuickFacts .icon-ranking .Figure').text();
        bachelors = $('#QuickFacts .icon-book .Figure').text();
        inst_type = $('#QuickFacts .icon-coin .Figure').text();
    }

    if (url.indexOf('studies') >= 0) {
        type = 'program';
        name = $('#StudyHeader [itemprop="name"]').text();
        desc = $('#ShortDescription').text();
        app_deadline = $('#StudyHeaderFacts time').text();
        duration = $('#StudyHeaderFacts [itemprop="duration"] div:eq(0)').text();
        currency = $('#StudyHeaderFacts .CurrencySymbol').attr('data-current-currency');
        nat_tuition_year = $('#StudyHeaderFacts [data-target="national"] [itemprop="price"] span').text();
        int_tuition_year = $('#StudyHeaderFacts [data-target="international"] [itemprop="price"] span').text();
        language = $('#StudyHeaderFacts [itemprop="inLanguage"] div:eq(0)').text();
        ielts = $('#LanguageRequirements ul li:eq(0) .Score').text();
        toefl_pbt = $('#LanguageRequirements ul li:eq(1) .Score').text();
        toefl_ibt = $('#LanguageRequirements ul li:eq(2) .Score').text();
        study_req = $('#StudyRequirement').text();
        study_contents = $('#StudyContents').text();
        study_desc = $('#StudyDescription').text();
    }

    result = {
        id: id,
        foreignId: foreignId,
        type: type,
        name: name,
        population: population,
        students: students,
        int_students: int_students,
        ranked_universities: ranked_universities,
        academic_year: academic_year,
        city: city,
        country: country,
        description: desc,
        about: about,
        services: services,
        student_life: student_life,
        ranking: ranking,
        bachelors: bachelors,
        inst_type: inst_type,
        app_deadline: app_deadline,
        duration: duration,
        currency: currency,
        nat_tuition_year: nat_tuition_year,
        int_tuition_year: int_tuition_year,
        language: language,
        ielts: ielts,
        toefl_pbt: toefl_pbt,
        toefl_ibt: toefl_ibt,
        study_req: study_req,
        study_contents: study_contents,
        study_description: study_desc
    };

    return result;
}
