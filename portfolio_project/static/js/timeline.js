const data = [
    {
        title: "Degree - Bvoc software development",
        date: "Apl,10,2023",
        desc: "graduated as a degree in bvoc sd at farook college , calicut",
    },
    {
        title: "Internship - python django",
        date: "jan,01,2023",
        desc: "completed a project using python django and got a chance to work with the group",
    },
    {
        title: "python django internship",
        date: "jan,01,2023",
        desc: "completed a project using python django and got a chance to work with the group ",
    },

];

const timelinecontainer = document.getElementById("timelinecontainer");
const timelines = data.map((timeline, i) => {

    return (
        `
        <div class="row content" key='${i}'>
            <div class="col-lg-1 ">
                <div class="verticalline"></div>
                <div class="badgetle mt-2 mb-2"></div>
                <div class="verticalline"></div>
            </div>
            <div class="col-lg-11">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>${timeline.title}</h5>
                            <h4>${timeline.date}</h4>
                        </div>
                        <p class="mt-3">${timeline.desc}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}).join('');


timelinecontainer.innerHTML = timelines;