(() => {
  const forms = {
    futbol: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZURVBRSzRIM0cyQU9FOVBGREdMMlVGVkVSVS4u',
    origami: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUM1k2ME9OQ0lIMDUwUjdTMU5YSkowUkxLVy4u',
    voleibol: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUNFRJN0pGQVpPTkZKUUlYWEJWUVhOM1ZTNS4u',
    basketball: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUMUJDWThERUs1WUhQRUVDQU9USlJXOVZJUy4u',
    crochet: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUREpPRzU4VFRGUjUyUVA1U1g1OEtXMFRQRC4u',
    badminton: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUOUhRQ05FMUJJUkI5TjhPS08zNVpCRjBaVi4u',
    ajedrez: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUQVNHV1M5V1BGVjBVUUNWSldSRlFFSk5LOS4u',
    esports: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUQUs1VU1WWEsyV1ZXSFA5NlI4REVNS1ZYQi4u',
    cine: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUOTdOWktGTENHM1AxUlo3TldYOU03VjlSSS4u',
    bingo: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUQTZXVVdXV1Q1NkNCMlkxMk03SURIMVBHQS4u'
  };
  window.FESTEC.activities.forEach(activity => {
    if (forms[activity.id]) {
      activity.link = forms[activity.id];
      activity.linkText = 'Formulario de inscripción';
    }
  });
  const pintura = window.FESTEC.activities.find(activity => activity.id === 'pintura');
  if (pintura) {
    pintura.link = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUQ05JNU1IQUdWVTNHVk9JT1I1SkpRVFhNQS4u';
    pintura.linkText = 'Formulario de inscripción · Lienzos';
    pintura.registrations = [
      { label: 'Formulario de inscripción · Lienzos', day: 'Miércoles 21 de octubre · 11:00 a. m.', url: pintura.link },
      { label: 'Formulario de inscripción · Tote Bags', day: 'Jueves 22 de octubre · 11:00 a. m.', url: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nR3Pv-qTsUO5Ah2qaKZCSEZxnWqjF31Jj3DnYBA0btZUMUxKVEQ0OUFFUFhGTTc0NkQ4MEdRSURQNy4u' }
    ];
  }
})();
