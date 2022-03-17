
const data = () => {

  const tabsQuestion = [
    {
      id: 'tab_introduction',
      content: '1. Introduction',
      title: 'Edit Introduction',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
      
    },
    {
      id: 'tab_questions',
      content: '2. Questions',
      title: 'List of questions',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'tab_result',
      content: '3. Result',
      title: 'List of sections',
      panelID: 'repeat-customers-content-1',
    }
  ];

  return {
    tabsQuestion
  }
}

export default data