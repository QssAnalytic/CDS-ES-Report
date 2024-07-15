export const getTechnicalText = (technical, name) => {
  if (technical <= 50) {
    return `${name} has intermediate data analytics capabilities as well as data cleaning, visualization and predictive analytics.`;
  } else if (technical <= 60) {
    return `${name} has fully operational command of R programming language, intermediate data science expertise and capabilities.`;
  } else if (technical <= 80) {
    return `${name} has fully operational command of R and Python programming languages, intermediate data science expertise and capabilities.`;
  } else if (technical <= 100) {
    return `${name} has substantial data science knowledge and experience working on full lifecycle data science practices.`;
  }
};

export const getOverallText = (interpersonal, pronoun) => {
  if (interpersonal <= 60) {
    return `${pronoun} demonstrates an individual analytical data approach to issue resolution, interacts with and may influence immediate colleagues.`;
  } else if (interpersonal <= 80) {
    return `${pronoun} demonstrates individual analytical data approach to issue resolution, engages or works with data specialists as necessary.`;
  } else if (interpersonal <= 100) {
    return `${pronoun} demonstrates an analytical and systematic data approach to issue resolution, interacts with, and may influence immediate colleagues.`;
  }
};

export const getTechnicalTextSecond = (experience, name, pronoun) => {
  if (experience <= 50) {
    return `${name} has experience working with data mining tools such as Tableau, SPSS, R, Python and SQL. Familiar with Big Data technologies including Spark, Hadoop and Map Reduce Generates actionable insights applying statistical techniques, for example, predictive models, segmentation analysis, customer profiling analysis and data mining. Applies new ways for predicting and modelling end-user behavior.`;
  } else if (experience <= 60) {
    return `${pronoun} is experienced in data cleaning, statistical analysis, machine learning and deep learning algorithms using most recent techniques in data science like XGBOOST, Prophet and FastAI. ${name} has also experience working with data mining tools such as SPSS, Tableau, SQL and Big Data technologies including Spark, Hadoop and Map Reduce. Generates actionable insights applying predictive statistical models, segmentation analysis, customer profiling analysis and data mining. Applies new ways for predicting and modelling end-user behavior.`;
  } else if (experience <= 100) {
    return `${pronoun} is experienced in data cleaning, visualization, statistical analysis, predictive modelling, machine learning and deep learning algorithms, inclusive of linear and non-Linear regression, logistic regression, time series analysis using the most recent techniques in data science like XGBOOST, Prophet and FastAI. ${name} has experience working with data mining tools such as Python, SPSS, R, Tableau, SQL and Big Data technologies including Spark, Hadoop and Map Reduce. ${pronoun} applies advanced statistical capabilities and delivers statistical models, for example, consumer predictive value, churn, segmentation and profiling, association models, and so forth.`;
  }
};

export const getOverallTextSecond = (interpersonal, name, pronoun) => {
  if (interpersonal <= 60) {
    return `${name} may contribute to routine issue resolution and ${pronoun.toLowerCase()} is expected to seek guidance in unexpected situations. Can present complex information to both technical and nontechnical audiences.`;
  } else if (interpersonal <= 100) {
    return `${name} may investigate, define and resolve complex issues. ${pronoun} understands the relationship between own specialism and wider customer / organisational requirements.`;
  }
};

export const getProblemSolvingText = (problemSolving) => {
  if (problemSolving <= 60) {
    return `Requires assistance in resolving unexpected problems or may contribute to routine issue resolution.`;
  } else if (problemSolving <= 80) {
    return `Analyses requirements and advises on scope and options for continuous operational improvement.`;
  } else if (problemSolving <= 90) {
    return `Investigates, defines and resolves complex issues.`;
  } else if (problemSolving <= 100) {
    return `Takes all requirements into account when making proposals. Understands the relationship between own specialism and wider customer/organisational requirements.`;
  }
};

export const getCriticalThinkingText = (criticalThinking) => {
  if (criticalThinking <= 60) {
    return `Is expected to seek guidance in unexpected situations. Uses little discretion. Receives specific direction, accepts guidance and has work reviewed at agreed milestones.`;
  } else if (criticalThinking <= 80) {
    return `Applies methodical approach to issue definition and resolution. Demonstrates an analytical and systematic data approach to issue resolution.`;
  } else if (criticalThinking <= 90) {
    return `Makes decisions which impact the success of assigned work, i.e. results, deadlines and budget.`;
  } else if (criticalThinking <= 100) {
    return `Makes decisions which impact the work of employing organisations, achievement of organisational objectives and financial performance.`;
  }
};

export const getCommunicationText = (communication) => {
  if (communication <= 60) {
    return `Communicates fluently, orally and in writing, and can present complex information to both technical and nontechnical audiences.`;
  } else if (communication <= 80) {
    return `Determines when issues should be escalated to a higher level. Uses discretion in identifying and responding to complex issues and assignments. Exercises substantial personal responsibility and autonomy. May have some responsibility for the work of others and for the allocation of resources. Understands and collaborates on the analysis of user / customer needs and represents this in their work. Contributes fully to the work of teams. Appreciates how own role relates to other roles and to the business of the employer or client.`;
  } else if (communication <= 90) {
    return `Understands and communicates industry developments, and the role and impact of technology in the employing organisation. Influences organisation, customers, suppliers, partners and peers on the contribution of own specialism. Communicates effectively at all levels to both technical and non-technical audiences. Work is often self-initiated. Establishes milestones and has a significant role in the assignment of tasks and/or responsibilities. Has significant influence over the allocation and management of resources appropriate to given assignments. Is fully responsible for meeting allocated technical and/or project / supervisory objectives. Collaborates regularly with team members, users and customers. Engages to ensure that user needs are being met throughout. Facilitates collaboration between stakeholders who share common objectives.`;
  } else if (communication <= 100) {
    return `Communicates the potential impact of emerging practices and technologies on organisations and individuals and assesses the risks of using or not using such practices and technologies. Inspires the organisation, and influences developments within the industry at the highest levels. Advances the knowledge and/or exploitation of technology within one or more organisations. Understands, explains and presents complex ideas to audiences at all levels in a persuasive and convincing manner.`;
  }
};

export const getLeadership = (leadership) => {
  if (leadership <= 60) {
    return `Interacts with and may influence immediate colleagues. May have more influence in own domain. May supervise others or make decisions which impact the work assigned to individuals or phases of projects. Is able to work in a team. Aware of need to collaborate with team and represent users / customer needs. May have some external contact with customers, suppliers and partners.`;
  } else if (leadership <= 80) {
    return `Investigates, defines and resolves complex issues.`;
  } else if (leadership <= 90) {
    return `Contributes to the implementation of data related policy and strategy. Demonstrates clear leadership. Establishes organisational objectives and assigns responsibilities. Takes a leading role in promoting data security throughout own area of responsibilities and collectively in the organisations.`;
  } else if (leadership <= 100) {
    return `Has a full range of strategic management and leadership skills. Leads on the formulation and implementation of data strategy. Applies the highest level of leadership skills. At the highest organisational level, has authority over all aspects of a significant area of work, including policy formation and application. Champions security within own area of work and throughout the organisation.`;
  }
};
