class SearchAndFilter {

  //TODO: Should searchAndFilter expect bad course input (i.e. null?)

  filterByCredits(courses, minimumCredits, maximumCredits) {

    let matchingCourses = [];

    // TODO: EDGE CASE: How to handle this?
    if (minimumCredits && maximumCredits && (minimumCredits > maximumCredits)) {
      return courses;
    }

    // Case 01:Both Credit fields are empty.
    if (!minimumCredits && !maximumCredits) {
      // Result: Return all courses.
      return courses;
    }

    // Case 02: Minimum Credits Specified
    if (minimumCredits) {
      matchingCourses = courses.filter(course => (course.credits >= minimumCredits));
      // Case 02.1: Minimum AND Maximum credits specified. 
      if (maximumCredits) {
        matchingCourses = matchingCourses.filter(course => (course.credits <= maximumCredits));
      }
    }
    // Case 03: Only Max Credits Specified
    else if (maximumCredits) {
      matchingCourses = courses.filter(course => (course.credits <= maximumCredits));
    }

    return matchingCourses;
  }

  filterBySubject(courses, subject) {
    let matchingCourses = courses;
    if (subject) {
      if (subject === "All") {
        return matchingCourses;
      }
      matchingCourses = courses.filter(course => (course.subject === subject));
    }
    return matchingCourses;
  }

  filterBySearchTerm(courses, search) {
    let matchingCourses = courses;
    // If valid search input
    if (search) {
      // remove leading/trailing whitespace
      search = search.trim();
      // let's work with an empty array
      matchingCourses = [];
      // step through all of the courses
      for (let course of courses) {
        // step through each courses keyword list until a match is found
        for (let keyword of course.keywords) {
          keyword = keyword.trim();
          if ((keyword === search) || (keyword.includes(search))) {
            // on match, add course to our matching courses
            matchingCourses.unshift(course);
            break;
          }

        }
      }
    }
    return matchingCourses;
  }

  searchAndFilter(courses, search, subject, minimumCredits, maximumCredits) {

    let matchingCourses = courses;

    matchingCourses = this.filterByCredits(matchingCourses, minimumCredits, maximumCredits);
    matchingCourses = this.filterBySubject(matchingCourses, subject);
    matchingCourses = this.filterBySearchTerm(matchingCourses, search);
    return matchingCourses;
  }
}

export default SearchAndFilter;
